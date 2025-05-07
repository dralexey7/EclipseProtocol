import { Skills, SectionCode } from '@prisma/client';
import { readCsv } from '@packages/utils/readCSV';
import { prisma } from '../src/db/prisma';

async function seed() {
  await prisma.system.deleteMany();
  await prisma.section.deleteMany();

  try {
    const sections = await readCsv('sections.csv');
    console.log('#1', sections);
    for (const section of sections) {
      await prisma.section.create({
        data: {
          name: section.name,
          description: section.description,
          skill: section.skill as Skills,
          code: section.code as SectionCode,
        },
      });
    }
  } catch (error) {
    console.log('error loading sections from csv to db', error);
  }

  try {
    const systems = await readCsv('systems.csv');
    for (const system of systems) {
      await prisma.system.create({
        data: {
          name: system.name,
          description: system.description,
          section_code: system.section_code as SectionCode,
        },
      });
    }
  } catch (error) {
    console.log('error loading systems from csv to db', error);
  }
}

seed();
