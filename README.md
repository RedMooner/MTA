# Описание приложения: Быстрый доступ к программам

Приложение представляет собой инструмент для быстрого доступа к часто используемым программам и файлам. Оно позволяет пользователю добавлять ярлыки программ, отображать их иконки и запускать их в один клик. Приложение также поддерживает настройку горячих клавиш для быстрого открытия/закрытия интерфейса.

---

## Основные функции

### 1. **Добавление программ и файлов**
   - Пользователь может перетаскивать файлы или программы в окно приложения.
   - Для каждого файла извлекается иконка, которая отображается в виде плитки.
   - Имя файла отображается под иконкой.

### 2. **Запуск программ**
   - При клике на плитку с иконкой программы или файла, приложение запускает его.
   - После запуска программы окно приложения автоматически скрывается.

### 3. **Управление через горячие клавиши**
   - Пользователь может настроить сочетание клавиш для быстрого открытия/закрытия окна приложения.
   - По умолчанию используется сочетание `CommandOrControl + X`.
   - Настройка горячих клавиш доступна через панель настроек.

### 4. **Полупрозрачное окно с обводкой**
   - Окно приложения имеет полупрозрачный фон и обводку для эстетичного вида.
   - Пользователь может перемещать окно, но оно всегда остается поверх других окон.

### 5. **Контекстное меню для управления файлами**
   - При правом клике на плитку появляется контекстное меню с опциями:
     - **Переименовать**: Позволяет изменить имя файла.
     - **Удалить**: Удаляет файл из списка.

### 6. **Панель настроек**
   - Панель настроек позволяет:
     - Изменить сочетание клавиш для открытия/закрытия окна.
     - Сохранить новое сочетание клавиш.

---

## Как это работает

1. **Добавление файлов**:
   - Пользователь перетаскивает файлы в окно приложения.
   - Приложение извлекает иконку файла и добавляет её в виде плитки в сетку.

2. **Запуск программ**:
   - При клике на плитку приложение запускает соответствующую программу или файл.

3. **Горячие клавиши**:
   - Пользователь может открыть панель настроек, нажать на поле ввода и ввести новое сочетание клавиш.
   - После сохранения новое сочетание клавиш будет использоваться для управления окном.

4. **Контекстное меню**:
   - Пользователь может переименовать или удалить файл через контекстное меню.

---

## Преимущества

- **Удобство**: Быстрый доступ к часто используемым программам и файлам.
- **Гибкость**: Возможность настройки горячих клавиш под свои предпочтения.
- **Эстетика**: Полупрозрачное окно с обводкой и анимациями делает интерфейс приятным для использования.
- **Простота**: Интуитивно понятный интерфейс с поддержкой перетаскивания.

---

## Пример использования

1. Пользователь перетаскивает ярлык программы (например, `Photoshop.exe`) в окно приложения.
2. Приложение извлекает иконку Photoshop и добавляет её в сетку.
3. Пользователь нажимает на плитку с иконкой Photoshop, и программа запускается.
4. Пользователь настраивает горячие клавиши `CommandOrControl + Shift + P` для быстрого открытия окна приложения.
5. При необходимости пользователь может переименовать или удалить ярлык через контекстное меню.

---

## Технические детали

- **Язык программирования**: JavaScript (Electron).
- **Интерфейс**: HTML, CSS.
- **Особенности**:
  - Использование `globalShortcut` для регистрации горячих клавиш.
  - Извлечение иконок с помощью внешнего инструмента (`IconExtractor.exe`).
  - Поддержка перетаскивания файлов (drag-and-drop).

---

Это приложение идеально подходит для пользователей, которые хотят оптимизировать доступ к своим программам и файлам, минимизируя время на поиск и запуск.
