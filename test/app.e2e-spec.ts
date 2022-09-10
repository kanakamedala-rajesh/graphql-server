import { INestApplication } from '@nestjs/common';

import { Test, TestingModule } from '@nestjs/testing';

import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(404);
  });

  it('/graphql (POST)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{ users { username } }`,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.users.length).toEqual(10);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
