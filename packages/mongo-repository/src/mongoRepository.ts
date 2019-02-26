import { Collection, Db } from 'mongodb';
import { Registry } from '@peetertomberg/registry';

export function createMongoRepository<T>(registry: Registry<Db>, databaseName: string, collectionName: string): Collection<T> {

  const errorMessage = [
    `Trying to execute database calls on the collection <${collectionName}>`,
    `without an active database connection to <${databaseName}>.`,
  ].join(', ');

  let collection: Collection<T> | undefined;

  registry.eventBus.on(registry.events.REGISTER, ({ key, value }: { key: string, value: Db }) => {
    if (key === databaseName) {
      collection = value.collection(collectionName);
    }
  });
  registry.eventBus.on(registry.events.UNREGISTER, ({ key }: { key: string }) => {
    if (key === databaseName) {
      collection = undefined;
    }
  });

  const handler: ProxyHandler<Collection<T>> = {
    get (target: any, propKey: keyof Collection<T>) {
      if (collection === undefined) {
        throw new Error(errorMessage);
      }
      return collection[propKey];
    },
  };

  return new Proxy<Collection<T>>({} as Collection, handler);
}
