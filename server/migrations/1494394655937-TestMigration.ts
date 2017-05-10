import {Connection, EntityManager, MigrationInterface, QueryRunner} from "typeorm";

export class TestMigration1494394655937 implements MigrationInterface {

    public async up(queryRunner: QueryRunner, connection: Connection, entityManager?: EntityManager): Promise<any> {
        await queryRunner.query(`INSERT INTO public.photo VALUES (1,\'test\', \'description\', \'happy.jpg\',1)`)
    }

    public async down(queryRunner: QueryRunner, connection: Connection, entityManager?: EntityManager): Promise<any> {
        await queryRunner.query("DELETE FROM public.photo WHERE name = 'test' AND fileName = 'happy.jpg'")
    }

}
