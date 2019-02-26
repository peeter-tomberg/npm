import { Collection, Db } from 'mongodb';

import { createRegistry, Registry } from '@peetertomberg/registry';
import { createMongoRepository } from '@peetertomberg/mongo-repository';

describe('mongoRepository', () => {
  const databaseName = 'database';
  const collectionName = 'users';
  const error = 'Trying to execute database calls on the collection <users>, without an active database connection to <database>.';
  let collection: Collection<String>;
  let registry: Registry<Db>;
  beforeEach(() => {
    registry = createRegistry<Db>();
    collection = createMongoRepository<String>(registry, databaseName, collectionName);
  });
  it('should throw an error when no connection is set up and you try to call a function', () => {
    expect(() => collection.find({})).toThrow(error);
  });
  it('should setup the collection once you register a database', () => {
    const database = {
      collection: jest.fn(),
    };
    registry.register(databaseName, (database as any));
    expect(database.collection).toHaveBeenCalledWith(collectionName);
  });
  it('should throw after you unregister a database and make a call to it again', () => {
    const database = {
      collection: jest.fn(),
    };
    registry.register(databaseName, (database as any));
    registry.unregister(databaseName);
    expect(() => collection.find({})).toThrow(error);
  });
  it('should proxy all calls to the database/connection after you register your collection', () => {
    const mockedMongoCollection = {
      find: jest.fn(),
    };
    const database = {
      collection: jest.fn().mockReturnValue(mockedMongoCollection),
    };
    registry.register(databaseName, (database as any));
    expect(database.collection).toHaveBeenCalledWith(collectionName);
    collection.find({ _id: 1 });
    expect(mockedMongoCollection.find).toHaveBeenCalledWith({ _id: 1 });
  });
});
