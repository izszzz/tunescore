import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';
import { Locales } from '@prisma/client';
import { ResourceCreateManyInput } from '../../src/types/common';

type Key = 'title' | 'name';

const isMusic = (
  arg: Omit<ResourceCreateManyInput, Key> | undefined,
): arg is Prisma.MusicCreateManyInput => {
  if (!arg) return false;
  return 'visibility' in arg && 'score' in arg && 'type' in arg;
};

const localeAdjective = (locale: keyof Locales) => {
  faker.locale = locale;
  return faker.word.adjective();
};

export function localeDummies<T>(count: number, params?: Omit<T, Key>) {
  const locale = {
    en: localeAdjective('en'),
    ja: localeAdjective('ja'),
  };
  if (isMusic(params))
    return [...Array(count)].map(() => ({
      ...params,
      title: locale,
    }));
  else
    return [...Array(count)].map(() => ({
      ...params,
      name: locale,
    }));
}
