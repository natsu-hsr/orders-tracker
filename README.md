# Orders Tracker

![Next.js](https://img.shields.io/badge/Next.js-15+-000000.svg?style=flat&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg?style=flat&logo=typescript) ![Ant Design](https://img.shields.io/badge/Ant_Design-5+-0170FE.svg?style=flat&logo=ant-design) ![Redux](https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=redux) ![Jest](https://img.shields.io/badge/Jest-Tests-C21325.svg?style=flat&logo=jest)

*supported languages: RU*

Вебсайт для отображения таблицы заказов с возможностью фильтрации, поиском и возможностью просмотреть подробности конкретного заказа

## Стек:
- Next
- TypeScript
- Ant Design
- Redux + RTK
- Jest + React Testing Library


## Особенности

- **Таблица заказов**: Отображение данных в таблице с поддержкой пагинации и прокрутки (Ant Design Table).
- **Фильтры**: Интерактивная форма фильтров в выдвижной панели (Drawer) для фильтрации заказов.
- **Типизация**: Полная поддержка TypeScript для надежности и масштабируемости.
- **Тестирование**: Юнит-тесты с использованием Jest и React Testing Library.
- **Состояние**: Управление фильтрами через Redux.
- **Адаптивность**: Проект адаптирован для мобильных экранов, планшетов, средних экранов, а также широкоформатных дисплеев.

*В качестве данных используются моки, выполнен в качестве тестового задания*


## Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/<username>/cdek_orders-table_next.git
   cd cdek_orders-table_next

2. **Установите зависимости**:
   ```bash 
   npm install

3. **Запустите проект локально**:
   ```bash
   npm run dev

4. **Откройте http://localhost:3000 в браузере.**


## Тестирование
В качестве примера, проект включает юнит-тесты для компонентов CustomTable и CustomTableContainer.

**Запуск тестов**:
   ```bash
   npm run test
   ```

Тесты проверяют:
- Рендеринг таблицы с данными и без фильтров.
- Отображение формы фильтров при их наличии.
- Применение стилей и передачу пропсов.


## Структура проекта
```
root/
├── src/
│   ├── app/                  # Страницы
│   │   ├── orders/           # Страница списка заказов
│   │   │   ├── [orderId]/    # Страница для конкретного заказа
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.module.scss
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── page.module.scss
│   │   ├── globals.css       # Глобальные стили
│   │   ├── layout.tsx        # Корневой layout
│   │   └── page.tsx          # Главная страница
│   ├── assets/               # Статические ресурсы (лого)
│   ├── components/           # Компоненты
│   │   ├── custom-fields/    # Кастомные поля
│   │   │   ├── fields/       # Поля
│   │   │   ├── technical/    # Технические компоненты
│   │   │   ├── custom-fields.types.ts
│   │   │   └── index.ts
│   │   ├── custom-table/     # Компонент таблицы
│   │   ├── filters-form/     # Форма фильтров
│   │   ├── header/           # Шапки
│   │   ├── order-details-form/ # Форма подробностей заказа
│   │   └── mocks/            # Моки-данные
│   ├── shared/               # Общие утилиты и стили
│   │   ├── styles/           # Общие стили
│   │   │   └── mixins.scss   # SCSS-миксины
│   ├── store/                # Настройка Redux
│   │   ├── config/           # Конфигурация Redux
│   │   └── slices/           # Слайсы Redux (например, orders)
├── jest.config.js            # Конфигурация Jest
├── tsconfig.json             # Конфигурация TypeScript
└── next.config.js            # Конфигурация Next.js
```


