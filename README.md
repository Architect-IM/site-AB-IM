# Сайт Ирины Михейкиной

Совместный репозиторий Ирины и Михаила.

## Актуальный сайт — Sites

Исходники опубликованного сайта находятся в **[sites/irina-architecture](sites/irina-architecture)**.

- Сайт: https://irina-mikheykina-architecture.miheikina-iv.chatgpt.site
- Перенесённая версия Sites: **52**, опубликована 4 октября 2026 года.
- Исходный коммит Sites: `33809f17ecd0d0473f1245e80999116a25d2f2a9`.
- Включены все страницы и изображения, страница «Консалтинг», «Владимирский контекст» и четыре подробных описания его услуг.

### Запуск

Требуются Node.js 22.13 или новее и pnpm 11.25.0. Команды выполняются из папки актуального сайта:

```sh
cd sites/irina-architecture
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Если Corepack не установлен, используйте установленный pnpm 11.25.0 вместо `corepack pnpm`.

Проверка типов и сборка:

```sh
corepack pnpm exec tsc --noEmit --incremental false
corepack pnpm build
```

Рабочая копия открывается по адресу, который команда `dev` выводит в терминал.

### Где редактировать

| Что | Путь внутри `sites/irina-architecture` |
| --- | --- |
| Страницы и маршруты | `app/` |
| Главная страница | `lib/home.ts` |
| Общая стилистика | `app/globals.css` |
| Шапка и подвал | `components/site-chrome.tsx`, `components/site-footer.tsx` |
| «Владимирский контекст» | `app/napravleniya/vladimir/`, `lib/vladimir.ts` |
| «Консалтинг» | `app/consulting/` |
| Изображения | `public/assets/` |

Обновление файлов в GitHub само по себе не публикует изменения в Sites. Для публикации используйте существующий проект Sites, указанный в `sites/irina-architecture/.openai/hosting.json`. При дальнейшей работе через Sites изменения нужно также переносить в этот репозиторий.

Форма контактов открывает почтовое приложение с подготовленным письмом; отдельного сервера отправки писем нет.

## Исходная версия Grok

В корне репозитория находятся исходники более ранней версии Grok (`src/`, `public/`, корневой `package.json`), её материалы и история. Для работы с актуальным сайтом запускайте команды из папки `sites/irina-architecture`.
