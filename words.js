const words = [
    {
        en: 'I',
        ru: 'Я',
    },
    {
        en: 'Speak',
        ru: 'Говорить',
    },
    {
        en: 'English',
        ru: 'Английский',
    },
    {
        en: 'Can',
        ru: 'Мочь, уметь',
    },
    {
        en: 'Understand',
        ru: 'Понимать',
    },
    {
        en: 'You',
        ru: 'Ты, тебе',
    },
    {
        en: 'It',
        ru: 'Это',
    },
    {
        en: 'Very',
        ru: 'Очень',
    },
    {
        en: 'Well',
        ru: 'Хорошо',
    },
    {
        en: 'Work',
        ru: 'Работа',
    },
    {
        en: 'Study',
        ru: 'Учиться',
    },
    {
        en: 'And',
        ru: 'И',
    },
    {
        en: 'Learn',
        ru: 'Учиться, изучать',
    },
    {
        en: 'Like',
        ru: 'Нравиться',
    },
    {
        en: 'This',
        ru: 'Этот',
    },
    {
        en: 'Online',
        ru: 'Онлайн',
    },
    {
        en: 'Place',
        ru: 'Место',
    },
    {
        en: 'City',
        ru: 'Город',
    },
    {
        en: 'Live',
        ru: 'Жить',
    },
    {
        en: 'In',
        ru: 'В',
    },
    {
        en: 'Russia',
        ru: 'Россия',
    },
    {
        en: 'New York',
        ru: 'Нью Йорк',
    },
    {
        en: 'Country',
        ru: 'Страна',
    },
    {
        en: 'We',
        ru: 'Мы',
    },
    {
        en: 'They',
        ru: 'Они',
    },
    {
        en: 'Help',
        ru: 'Помогать, помощь',
    },
    {
        en: 'Me',
        ru: 'Меня, мне',
    },
    {
        en: 'Really',
        ru: 'Очень, действительно',
    },
    {
        en: 'Want',
        ru: 'Хотеть',
    },
    {
        en: 'Lesson',
        ru: 'Урок',
    },
    {
        en: 'Video',
        ru: 'Видео',
    },
    {
        en: 'Program',
        ru: 'Программа',
    },
    {
        en: 'See',
        ru: 'Видеть',
    },
    {
        en: 'My',
        ru: 'Мой',
    },
    {
        en: 'Result',
        ru: 'Результат',
    },
    {
        en: 'Russian',
        ru: 'Русский',
    },
    {
        en: 'Know',
        ru: 'Знать',
    },
    {
        en: 'Go',
        ru: 'Идти, ехать',
    },
    {
        en: 'To',
        ru: 'в, к, чтобы',
    },
    {
        en: 'School',
        ru: 'Школа',
    },
    {
        en: 'Often',
        ru: 'Часто',
    },
    {
        en: 'Here',
        ru: 'Здесь, сюда',
    },
    {
        en: 'There',
        ru: 'Там, туда',
    },
    {
        en: 'Language',
        ru: 'Язык',
    },
    {
        en: 'Every',
        ru: 'Каждый',
    },
    {
        en: 'Day',
        ru: 'День',
    },
    {
        en: 'Do',
        ru: 'Делать',
    },
    {
        en: 'Travel',
        ru: 'Путешествовать',
    },
    {
        en: 'Year',
        ru: 'Год',
    },
    {
        en: 'Travelling',
        ru: 'Путешествие',
    },
    {
        en: 'Game',
        ru: 'Игра',
    },
    {
        en: 'Play',
        ru: 'Играть',
    },
    {
        en: 'Football',
        ru: 'Футбол',
    },
    {
        en: 'So',
        ru: 'Так, такой',
    },
    {
        en: 'Also',
        ru: 'Также, тоже',
    },
    {
        en: 'Think',
        ru: 'Думать',
    },
    {
        en: 'About',
        ru: 'О, об',
    },
    {
        en: 'Sometimes',
        ru: 'Иногда',
    },
    {
        en: 'Love',
        ru: 'Любить, любовь',
    },
    {
        en: 'Song',
        ru: 'Песня',
    },
    {
        en: 'Music',
        ru: 'Музыка',
    },
    {
        en: 'Read',
        ru: 'Читать',
    },
    {
        en: 'Book',
        ru: 'Книга',
    },
    {
        en: 'More',
        ru: 'Больше',
    },
    {
        en: 'Practice',
        ru: 'Практика',
    },
    {
        en: 'These',
        ru: 'Эти',
    },
    {
        en: 'Usually',
        ru: 'Обычно',
    },
    {
        en: 'Buy',
        ru: 'Купить',
    },
    {
        en: 'Thing',
        ru: 'Вещь',
    },
    {
        en: 'Absolutely',
        ru: 'Абсолютно, полностью',
    },
    {
        en: 'Agree',
        ru: 'Соглашаться',
    },
    {
        en: 'Better',
        ru: 'Лучше',
    },
    {
        en: 'Cost',
        ru: 'Стоить',
    },
    {
        en: 'Dollar',
        ru: 'Доллар',
    },
    {
        en: 'Euro',
        ru: 'Евро',
    },
    {
        en: 'Far',
        ru: 'Далеко, далекий',
    },
    {
        en: 'Feel',
        ru: 'Чувствовать',
    },
    {
        en: 'Fifty',
        ru: 'Пятьдесят',
    },
    {
        en: 'He',
        ru: 'Он',
    },
    {
        en: 'Less',
        ru: 'Меньше',
    },
    {
        en: 'Make',
        ru: 'Делать',
    },
    {
        en: 'Mistake',
        ru: 'Ошибка',
    },
    {
        en: 'Much',
        ru: 'Много',
    },
    {
        en: 'Near',
        ru: 'Рядом, около',
    },
    {
        en: 'Pound',
        ru: 'Фунт',
    },
    {
        en: 'Problem',
        ru: 'Проблема',
    },
    {
        en: 'She',
        ru: 'Она',
    },
    { 
        en: 'Ten',
        ru: 'Десять',
    },
    {
        en: 'That',
        ru: 'Тот',
    },
    {
        en: 'Ticket',
        ru: 'Билет',
    },
    {
        en: 'Together',
        ru: 'Вместе',
    },
    {
        en: 'Twenty',
        ru: 'Двадцать',
    },
    {
        en: 'With',
        ru: 'С',
    },
    {
        en: 'Call',
        ru: 'Звонить, звонок',
    },
    {
        en: 'Happen',
        ru: 'Случаться, происходить',
    },
    {
        en: 'Hear',
        ru: 'Слышать',
    },
    {
        en: 'How',
        ru: 'Как',
    },
    {
        en: 'Idea',
        ru: 'Идея',
    },
    {
        en: 'Little',
        ru: 'Мало',
    },
    {
        en: 'A lot',
        ru: 'Много',
    },
    {
        en: 'On',
        ru: 'На',
    },
    {
        en: 'People',
        ru: 'Люди',
    },
    {
        en: 'Person',
        ru: 'Человек',
    },
    {
        en: 'Say',
        ru: 'Говорить',
    },
    {
        en: 'Tell',
        ru: 'Сказать, рассказывать',
    },
    {
        en: 'Too',
        ru: 'Также, тоже',
    },
    {
        en: 'Tv',
        ru: 'Телевизор',
    },
    {
        en: 'Us',
        ru: 'Нам, нас',
    },
    {
        en: 'Watch',
        ru: 'Смотреть',
    },
    {
        en: 'Why',
        ru: 'Зачем',
    },
    {
        en: 'Apple',
        ru: 'Яблоко',
    },
    {
        en: 'Boy',
        ru: 'Мальчик',
    },
    {
        en: 'Brother',
        ru: 'Брат',
    },
    {
        en: 'Bus',
        ru: 'Автобус',
    },
    {
        en: 'Car',
        ru: 'Машина',
    },
    {
        en: 'Free',
        ru: 'Бесплатный, свободный',
    },
    {
        en: 'Girl',
        ru: 'Девочка, девушка',
    },
    {
        en: 'Have',
        ru: 'Иметь',
    },
    {
        en: 'Hotel',
        ru: 'Отель',
    },
    {
        en: 'House',
        ru: 'Дом',
    },
    {
        en: 'Job',
        ru: 'Работа',
    },
    {
        en: 'Man',
        ru: 'Мужчина',
    },
    {
        en: 'Money',
        ru: 'Деньги',
    },
    {
        en: 'One',
        ru: 'Один',
    },
    {
        en: 'Orange',
        ru: 'Апельсин',
    },
    {
        en: 'Question',
        ru: 'Вопрос',
    },
    {
        en: 'Sister',
        ru: 'Сестра',
    },
    {
        en: 'Some',
        ru: 'Некоторые, немного',
    },
    {
        en: 'Teacher',
        ru: 'Учитель',
    },
    {
        en: 'Time',
        ru: 'Время',
    },
    {
        en: 'Two',
        ru: 'Два',
    },
    {
        en: 'University',
        ru: 'Университет',
    },
    {
        en: 'Woman',
        ru: 'Женщина',
    },
    {
        en: 'Your',
        ru: 'Твой, ваш',
    },
    {
        en: 'Bank',
        ru: 'Банк',
    },
    {
        en: 'Coffee',
        ru: 'Кофе',
    },
    {
        en: 'Computer',
        ru: 'Компьютер',
    },
    {
        en: 'Different',
        ru: 'Разные',
    },
    {
        en: 'Drink',
        ru: 'Пить',
    },
    {
        en: 'Eat',
        ru: 'Есть',
    },
    {
        en: 'Exercise',
        ru: 'Упражнение',
    },
    {
        en: 'Family',
        ru: 'Семья',
    },
    {
        en: 'Fish',
        ru: 'Рыба',
    },
    {
        en: 'Juice',
        ru: 'Сок',
    },
    {
        en: 'Milk',
        ru: 'Молоко',
    },
    {
        en: 'Motivation',
        ru: 'Мотивация',
    },
    {
        en: 'Progress',
        ru: 'Прогресс',
    },
    {
        en: 'Sport',
        ru: 'Спорт',
    },
    {
        en: 'Student',
        ru: 'Студент',
    },
    {
        en: 'Taxi',
        ru: 'Такси',
    },
    {
        en: 'Tea',
        ru: 'Чай',
    },
    {
        en: 'Water',
        ru: 'Вода',
    },
    {
        en: 'Airport',
        ru: 'Аэропорт',
    },
    {
        en: 'Apartment',
        ru: 'Квартира, апартаменты',
    },
    {
        en: 'Cake',
        ru: 'Торт',
    },
    {
        en: 'Child',
        ru: 'Ребенок',
    },
    {
        en: 'Children',
        ru: 'Дети',
    },
    {
        en: 'Chocolate',
        ru: 'Шоколад',
    },
    {
        en: 'Daughter',
        ru: 'Дочь',
    },
    {
        en: 'Four',
        ru: 'Четыре',
    },
    {
        en: 'German',
        ru: 'Немецкий',
    },
    {
        en: 'Meat',
        ru: 'Мясо',
    },
    {
        en: 'Men',
        ru: 'Мужчины',
    },
    {
        en: 'Seafood',
        ru: 'Морепродукты',
    },
    {
        en: 'Son',
        ru: 'Сын',
    },
    {
        en: 'Spanish',
        ru: 'Испанский',
    },
    {
        en: 'Three',
        ru: 'Три',
    },
    {
        en: 'Women',
        ru: 'Женщины',
    },
    {
        en: 'Boyfriend',
        ru: 'Парень, друг парень',
    },
    {
        en: 'Ice cream',
        ru: 'Мороженое',
    },
    {
        en: 'Foreign',
        ru: 'Иностранный',
    },
    {
        en: 'Girlfriend',
        ru: 'Девушка, подружка девушка',
    },
    {
        en: 'Hospital',
        ru: 'Пицца',
    },
    {
        en: 'Pizza',
        ru: 'Пицца',
    },
    {
        en: 'Swimming',
        ru: 'Плавание',
    },
    {
        en: 'Be',
        ru: 'Быть',
    },
    {
        en: 'Become',
        ru: 'Становиться',
    },
    {
        en: 'Businessman',
        ru: 'Бизнесмен',
    },
    {
        en: 'Correctly',
        ru: 'Правильно',
    },
    {
        en: 'Designer',
        ru: 'Дизайнер',
    },
    {
        en: 'Doctor',
        ru: 'Доктор',
    },
    {
        en: 'Fluently',
        ru: 'Свовбодно, бегло',
    },
    {
        en: 'Happy',
        ru: 'Счастливый',
    },
    {
        en: 'Her',
        ru: 'Ей',
    },
    {
        en: 'Him',
        ru: 'Ему',
    },
    {
        en: 'Manager',
        ru: 'Менеджер',
    },
    {
        en: 'New',
        ru: 'Новый',
    },
    {
        en: 'Now',
        ru: 'Сейчас',
    },
    {
        en: 'Programmer',
        ru: 'Программист',
    },
    {
        en: 'Them',
        ru: 'Их, им',
    },
    {
        en: 'Visit',
        ru: 'Посещать',
    },
    {
        en: 'Without',
        ru: 'Без',
    },
    {
        en: 'Would',
        ru: 'Бы',
    },
    {
        en: 'Abroad',
        ru: 'За границей',
    },
    {
        en: 'China',
        ru: 'Китай',
    },
    {
        en: 'England',
        ru: 'Англия',
    },
    {
        en: 'Father',
        ru: 'Отец',
    },
    {
        en: 'Germany',
        ru: 'Германия',
    },
    {
        en: 'His',
        ru: 'Его',
    },
    {
        en: 'Italy',
        ru: 'Италия',
    },
    {
        en: 'Japan',
        ru: 'Япония',
    },
    {
        en: 'Month',
        ru: 'Месяц',
    },
    {
        en: 'Mother',
        ru: 'Мама',
    },
    {
        en: 'Next',
        ru: 'Следующий',
    },
    {
        en: 'The united states',
        ru: 'Соединенные штаты америки',
    },
    {
        en: 'Their',
        ru: 'Их',
    },
    {
        en: 'Week',
        ru: 'Неделя',
    },
    {
        en: 'Big',
        ru: 'Большой',
    },
    {
        en: 'Business',
        ru: 'Бизнес',
    },
    {
        en: 'Control',
        ru: 'Контроль, контролировать',
    },
    {
        en: 'Course',
        ru: 'Курс',
    },
    {
        en: 'Education',
        ru: 'Образование',
    },
    {
        en: 'Food',
        ru: 'Еда',
    },
    {
        en: 'For',
        ru: 'Для',
    },
    {
        en: 'Future',
        ru: 'Будущее',
    },
    {
        en: 'Not',
        ru: 'Не',
    },
    {
        en: 'Our',
        ru: 'Наш',
    },
    {
        en: 'Pay',
        ru: 'Платить',
    },
    {
        en: 'Politics',
        ru: 'Политика',
    },
    {
        en: 'Situation',
        ru: 'Ситуация',
    },
    {
        en: 'Spend',
        ru: 'Проводить, тратить',
    },
    {
        en: 'Talk',
        ru: 'Говорить, разговор',
    },
    {
        en: 'Tennis',
        ru: 'Теннис',
    },
    {
        en: 'Those',
        ru: 'Те',
    },
    {
        en: 'Any',
        ru: 'Любой, какой-либо',
    },
    {
        en: 'Cat',
        ru: 'Кот',
    },
    {
        en: 'Dog',
        ru: 'Собака',
    },
    {
        en: 'Exam',
        ru: 'Экзамен',
    },
    {
        en: 'Friend',
        ru: 'Друг',
    },
    {
        en: 'Interest',
        ru: 'Интересовать',
    },
    {
        en: 'Interesting',
        ru: 'Интересный',
    },
    {
        en: 'Internet',
        ru: 'Интернет',
    },
    {
        en: 'Maths',
        ru: 'Математика',
    },
    {
        en: 'Motivate',
        ru: 'Мотивировать',
    },
    {
        en: 'Only',
        ru: 'Только',
    },
    {
        en: 'Plan',
        ru: 'План',
    },
    {
        en: 'Sell',
        ru: 'Продавать',
    },
    {
        en: 'Service',
        ru: 'Услуга, сервис',
    },
    {
        en: 'Subject',
        ru: 'Предмет, тема',
    },
    {
        en: 'Teach',
        ru: 'Учить, преподавать',
    },
    {
        en: 'Test',
        ru: 'Тест',
    },
    {
        en: 'Use',
        ru: 'Использовать',
    },
    {
        en: 'Worry',
        ru: 'Волноваться, беспокоиться',
    },
    {
        en: 'Address',
        ru: 'Адрес',
    },
    {
        en: 'Again',
        ru: 'Опять',
    },
    {
        en: 'Another',
        ru: 'Другой',
    },
    {
        en: 'Bad',
        ru: 'Плохой',
    },
    {
        en: 'Because',
        ru: 'Потому что',
    },
    {
        en: 'Communicate',
        ru: 'Общаться',
    },
    {
        en: 'Fast',
        ru: 'Быстро, быстрый',
    },
    {
        en: 'Get',
        ru: 'Получать',
    },
    {
        en: 'Good',
        ru: 'Хороший',
    },
    {
        en: 'Name',
        ru: 'Имя',
    },
    {
        en: 'Need',
        ru: 'Нуждаться',
    },
    {
        en: 'Other',
        ru: 'Другие',
    },
    {
        en: 'Prefer',
        ru: 'Предпочитать',
    },
    {
        en: 'Professionally',
        ru: 'Профессионально',
    },
    {
        en: 'Remember',
        ru: 'Помнить',
    },
    {
        en: 'Slowly',
        ru: 'Медленно',
    },
    {
        en: 'Website',
        ru: 'сайт',
    },
    {
        en: 'Who',
        ru: 'кто, кого',
    },
    {
        en: 'Boring',
        ru: 'Скучный',
    },
    {
        en: 'Chinese',
        ru: 'Китайский',
    },
    {
        en: 'Cinema',
        ru: 'Кино, кинотеатр',
    },
    {
        en: 'Dancing',
        ru: 'Танцы',
    },
    {
        en: 'Find',
        ru: 'Находить',
    },
    {
        en: 'Intensively',
        ru: 'Интенсивно',
    },
    {
        en: 'Many',
        ru: 'Много',
    },
    {
        en: 'Movie',
        ru: 'Фильм',
    },
    {
        en: 'Or',
        ru: 'Или',
    },
    {
        en: 'Park',
        ru: 'Парк',
    },
    {
        en: 'Reading',
        ru: 'Чтение',
    },
    {
        en: 'Real',
        ru: 'Реальный',
    },
    {
        en: 'Show',
        ru: 'Показывать',
    },
    {
        en: 'Singing',
        ru: 'Пение',
    },
    {
        en: 'Support',
        ru: 'Поддержка, поддерживать',
    },
    {
        en: 'Train',
        ru: 'Тренироваться',
    },
    {
        en: 'Weather',
        ru: 'Погода',
    },
    {
        en: 'Write',
        ru: 'Писать',
    },
    {
        en: 'Actor',
        ru: 'Актер',
    },
    {
        en: 'Actress',
        ru: 'Актриса',
    },
    {
        en: 'Change',
        ru: 'Менять',
    },
    {
        en: 'Cheap',
        ru: 'Дешевый',
    },
    {
        en: 'Discuss',
        ru: 'Обсуждать',
    },
    {
        en: 'Expensive',
        ru: 'Дорогой',
    },
    {
        en: 'Five',
        ru: 'Пять',
    },
    {
        en: 'Forty',
        ru: 'Сорок',
    },
    {
        en: 'From',
        ru: 'Из',
    },
    {
        en: 'One hundred',
        ru: 'Сто',
    },
    {
        en: 'Important',
        ru: 'Важный',
    },
    {
        en: 'Listen',
        ru: 'Слушать',
    },
    {
        en: 'Look',
        ru: 'Смотреть',
    },
    {
        en: 'Method',
        ru: 'Метод',
    },
    {
        en: 'Phone',
        ru: 'Телефон',
    },
    {
        en: 'Seem',
        ru: 'Казаться',
    },
    {
        en: 'Seven',
        ru: 'Семь',
    },
    {
        en: 'Strange',
        ru: 'Странный',
    },
    {
        en: 'Than',
        ru: 'Чем',
    },
    {
        en: 'Thirty',
        ru: 'Тридцать',
    },
    {
        en: 'Thousand',
        ru: 'Тысяча',
    },
    {
        en: 'Application',
        ru: 'Приложение',
    },
    {
        en: 'Clothes',
        ru: 'Одежда',
    },
    {
        en: 'Come',
        ru: 'Приходить',
    },
    {
        en: 'Cook',
        ru: 'Готовить',
    },
    {
        en: 'Cooking',
        ru: 'Готовка',
    },
    {
        en: 'Dance',
        ru: 'Танцевать',
    },
    {
        en: 'Early',
        ru: 'Рано',
    },
    {
        en: 'Enough',
        ru: 'Достаточно',
    },
    {
        en: 'Get up',
        ru: 'Вставать',
    },
    {
        en: 'Group',
        ru: 'Группа',
    },
    {
        en: 'Home',
        ru: 'Дом, домой',
    },
    {
        en: 'Late',
        ru: 'Поздно',
    },
    {
        en: 'Order',
        ru: 'Заказ, заказывать',
    },
    {
        en: 'Pet',
        ru: 'Домашнее животное',
    },
    {
        en: 'Profession',
        ru: 'Профессия',
    },
    {
        en: 'Recommend',
        ru: 'Рекомендовать',
    },
    {
        en: 'Shop',
        ru: 'Магазин',
    },
    {
        en: 'Toy',
        ru: 'Игрушка',
    },
    {
        en: 'Wake up',
        ru: 'Просыпаться',
    },
    {
        en: 'All',
        ru: 'Все',
    },
    {
        en: 'Document',
        ru: 'Документ',
    },
    {
        en: 'Download',
        ru: 'Скачать',
    },
    {
        en: 'File',
        ru: 'Файл',
    },
    {
        en: 'Island',
        ru: 'Остров',
    },
    {
        en: 'Leave',
        ru: 'Покидать, уезжать',
    },
    {
        en: 'Level',
        ru: 'Уровень',
    },
    {
        en: 'Regularly',
        ru: 'Регулярно',
    },
    {
        en: 'Sad',
        ru: 'Печальный',
    },
    {
        en: 'Unhappy',
        ru: 'Несчастный',
    },
    {
        en: 'What',
        ru: 'Что, какой',
    },
    {
        en: 'When',
        ru: 'Когда',
    },
    {
        en: 'Where',
        ru: 'Где',
    },
    {
        en: 'Which',
        ru: 'Который',
    },
    {
        en: 'Angry',
        ru: 'Злой',
    },
    {
        en: 'At',
        ru: 'В, на',
    },
    {
        en: 'Best',
        ru: 'Лучший',
    },
    {
        en: 'Busy',
        ru: 'Занятый',
    },
    {
        en: 'Fact',
        ru: 'Факт',
    },
    {
        en: 'Husband',
        ru: 'Муж',
    },
    {
        en: 'Million',
        ru: 'Миллион',
    },
    {
        en: 'Old',
        ru: 'Старый',
    },
    {
        en: 'Right',
        ru: 'Правильный',
    },
    {
        en: 'Room',
        ru: 'Комната',
    },
    {
        en: 'Secretary',
        ru: 'Секретарь',
    },
    {
        en: 'Singer',
        ru: 'Певец',
    },
    {
        en: 'Sixty',
        ru: 'Шестьдесят',
    },
    {
        en: 'Sure',
        ru: 'Уверен',
    },
    {
        en: 'Wife',
        ru: 'Жена',
    },
    {
        en: 'Wonderful',
        ru: 'Прекрасный, замечательный',
    },
    {
        en: 'Young',
        ru: 'Молодой',
    },
    {
        en: 'Alright',
        ru: 'В порядке',
    },
    {
        en: 'American',
        ru: 'Американский, американец',
    },
    {
        en: 'Beautiful',
        ru: 'Красивый',
    },
    {
        en: 'Dangerous',
        ru: 'Опасный',
    },
    {
        en: 'Difficult',
        ru: 'Сложный, трудный',
    },
    {
        en: 'Easy',
        ru: 'Легко, легкий',
    },
    {
        en: 'Effective',
        ru: 'Эффективный',
    },
    {
        en: 'Eight',
        ru: 'Восемь',
    },
    {
        en: 'Eighteen',
        ru: 'Восемнадцать',
    },
    {
        en: 'Fine',
        ru: 'Хорошо, в порядке',
    },
    {
        en: 'Hard-working',
        ru: 'Трудолюбивый',
    },
    {
        en: 'Lazy',
        ru: 'Ленивый',
    },
    {
        en: 'Married',
        ru: 'Женат, замужем',
    },
    {
        en: 'Ok',
        ru: 'Окей, в порядке',
    },
    {
        en: 'Parents',
        ru: 'Родители',
    },
    {
        en: 'Poor',
        ru: 'Бедный',
    },
    {
        en: 'Possible',
        ru: 'Возможный',
    },
    {
        en: 'Ready',
        ru: 'Готов',
    },
    {
        en: 'Rich',
        ru: 'Богатый',
    },
    {
        en: 'Seventy',
        ru: 'Семьдесят',
    },
    {
        en: 'Single',
        ru: 'Холост',
    },
    {
        en: 'Smart',
        ru: 'Умный',
    },
    {
        en: 'Afraid',
        ru: 'Бояться',
    },
    {
        en: 'Answer',
        ru: 'Ответ, отвечать',
    },
    {
        en: 'Correct',
        ru: 'Правильный',
    },
    {
        en: 'Decision',
        ru: 'Решение',
    },
    {
        en: 'Of',
        ru: 'Из',
    },
    {
        en: 'Popular',
        ru: 'Популярный',
    },
    {
        en: 'Assistant',
        ru: 'Помощник',
    },
    {
        en: 'Brazil',
        ru: 'Бразилия',
    },
    {
        en: 'Cheaper',
        ru: 'Дешевле',
    },
    {
        en: 'Choice',
        ru: 'Выбор',
    },
    {
        en: 'Colleague',
        ru: 'Коллега',
    },
    {
        en: 'Director',
        ru: 'Директор',
    },
    {
        en: 'Driver',
        ru: 'Водитель',
    },
    {
        en: 'Kitchen',
        ru: 'Кухня',
    },
    {
        en: 'Native speaker',
        ru: 'Носитель языка',
    },
    {
        en: 'Price',
        ru: 'Цена',
    },
    {
        en: 'Professional',
        ru: 'Профессиональный',
    },
    {
        en: 'Trainer',
        ru: 'Тренер',
    },
    {
        en: 'Worker',
        ru: 'Работник, рабочий',
    },
    {
        en: 'Bag',
        ru: 'Сумка',
    },
    {
        en: 'Box',
        ru: 'Коробка',
    },
    {
        en: 'Dress',
        ru: 'Платье',
    },
    {
        en: 'Jeans',
        ru: 'Джинсы',
    },
    {
        en: 'Pair',
        ru: 'Пара',
    },
    {
        en: 'Trousers',
        ru: 'Брюки',
    },
    {
        en: 'Upset',
        ru: 'Расстроен',
    },
    {
        en: 'Worse',
        ru: 'Хуже',
    },
    {
        en: 'Wrong',
        ru: 'Неправильный',
    },
    {
        en: 'Each',
        ru: 'Каждый',
    },
    {
        en: 'Lie',
        ru: 'Лежать',
    },
    {
        en: 'Moment',
        ru: 'Момент',
    },
    {
        en: 'Necessary',
        ru: 'Необходимо',
    },
    {
        en: 'Photo',
        ru: 'Фото',
    },
    {
        en: 'Relax',
        ru: 'Отдыхать, расслабляться',
    },
    {
        en: 'Simple',
        ru: 'Простой',
    },
    {
        en: 'Smile',
        ru: 'Улыбаться',
    },
    {
        en: 'Sofa',
        ru: 'Диван',
    },
    {
        en: 'Text',
        ru: 'Текст',
    },
    {
        en: 'Tradition',
        ru: 'Традиция',
    },
    {
        en: 'Under',
        ru: 'Под',
    },
    {
        en: 'Writer',
        ru: 'Писатель',
    },
    {
        en: 'America',
        ru: 'Америка',
    },
    {
        en: 'Dancer',
        ru: 'Танцор',
    },
    {
        en: 'Earn',
        ru: 'Зарабатывать',
    },
    {
        en: 'Everything',
        ru: 'Все',
    },
    {
        en: 'Fat',
        ru: 'Толстый',
    },
    {
        en: 'Life',
        ru: 'Жизнь',
    },
    {
        en: 'Reality',
        ru: 'Реальность',
    },
    {
        en: 'The same',
        ru: 'Тот же самый',
    },
    {
        en: 'Tasty',
        ru: 'Вкусный',
    },
    {
        en: 'Team',
        ru: 'Команда',
    },
    {
        en: 'Against',
        ru: 'Против',
    },
    {
        en: 'Casual',
        ru: 'Повседневный',
    },
    {
        en: 'Choose',
        ru: 'Выбирать',
    },
    {
        en: 'Formal',
        ru: 'Формальный',
    },
    {
        en: 'Informal',
        ru: 'Неформальный',
    },
    {
        en: 'Journalist',
        ru: 'Журналист',
    },
    {
        en: 'Nowadays',
        ru: 'В наше время',
    },
    {
        en: 'Useful',
        ru: 'Полезный',
    },
    {
        en: 'Walk',
        ru: 'Гулять',
    },
    {
        en: 'Wear',
        ru: 'Носить',
    },
    {
        en: 'Worried',
        ru: 'Взволнованный, обеспокоенный',
    },
    {
        en: 'After',
        ru: 'После',
    },
    {
        en: 'Close',
        ru: 'Закрывать',
    },
    {
        en: 'Could',
        ru: 'Мог, мог бы',
    },
    {
        en: 'Door',
        ru: 'Дверь',
    },
    {
        en: 'Example',
        ru: 'Пример',
    },
    {
        en: 'Floor',
        ru: 'Пол',
    },
    {
        en: 'Give',
        ru: 'Давать',
    },
    {
        en: 'Homework',
        ru: 'Домашнее задание',
    },
    {
        en: 'Later',
        ru: 'Позже',
    },
    {
        en: 'Letter',
        ru: 'Письмо',
    },
    {
        en: 'Open',
        ru: 'Открывать',
    },
    {
        en: 'Put',
        ru: 'Класть',
    },
    {
        en: 'Smoke',
        ru: 'Курить',
    },
    {
        en: 'Stop',
        ru: 'Останавливаться, стоп',
    },
    {
        en: 'Story',
        ru: 'История',
    },
    {
        en: 'Swim',
        ru: 'Плавать',
    },
    {
        en: 'Table',
        ru: 'Стол',
    },
    {
        en: 'Window',
        ru: 'Окно',
    },
    {
        en: 'Afternoon',
        ru: 'Днем',
    },
    {
        en: 'Ask',
        ru: 'Спрашивать, просить',
    },
    {
        en: 'Bike',
        ru: 'Велосипед',
    },
    {
        en: 'Careful',
        ru: 'Осторожный',
    },
    {
        en: 'Check',
        ru: 'Проверять',
    },
    {
        en: 'Continue',
        ru: 'Продолжать',
    },
    {
        en: 'Email',
        ru: 'Электронная почта',
    },
    {
        en: 'Evening',
        ru: 'Вечер',
    },
    {
        en: 'Horse',
        ru: 'Лошадь',
    },
    {
        en: 'Information',
        ru: 'Информация',
    },
    {
        en: 'Lose',
        ru: 'Терять',
    },
    {
        en: 'Meet',
        ru: 'Встречать',
    },
    {
        en: 'Must',
        ru: 'Должен',
    },
    {
        en: "O'clock",
        ru: 'Час',
    },
    {
        en: 'Please',
        ru: 'Пожалуйста',
    },
    {
        en: 'Ride',
        ru: 'Ездить, кататься',
    },
    {
        en: 'Should',
        ru: 'Следует',
    },
    {
        en: 'Something',
        ru: 'Что-то',
    },
    {
        en: 'Stay',
        ru: 'Оставаться',
    },
    {
        en: 'Today',
        ru: 'Сегодня',
    },
    {
        en: 'Try',
        ru: 'Пытаться, стараться',
    },
    {
        en: 'Urgently',
        ru: 'Срочно',
    },
    {
        en: 'Win',
        ru: 'Выиграть',
    },
    {
        en: 'Right now',
        ru: 'Прямо сейчас',
    },
    {
        en: 'Believe',
        ru: 'Верить',
    },
    {
        en: 'Drive',
        ru: 'Водить машину, ехать',
    },
    {
        en: 'Eye',
        ru: 'Глаз',
    },
    {
        en: 'Finish',
        ru: 'Заканчивать',
    },
    {
        en: 'God',
        ru: 'Бог',
    },
    {
        en: 'Last',
        ru: 'Последний',
    },
    {
        en: "Let's",
        ru: 'Давай',
    },
    {
        en: 'Message',
        ru: 'Сообщение',
    },
    {
        en: 'Send',
        ru: 'Отправить',
    },
    {
        en: 'Serious',
        ru: 'Серьезный',
    },
    {
        en: 'Sleep',
        ru: 'Спать',
    },
    {
        en: 'Start',
        ru: 'Начало, начинать',
    },
    {
        en: 'Take',
        ru: 'Брать',
    },
    {
        en: 'Almost',
        ru: 'Почти',
    },
    {
        en: 'Begin',
        ru: 'Начинать',
    },
    {
        en: 'Build',
        ru: 'Строить',
    },
    {
        en: 'Cheaply',
        ru: 'Дешево',
    },
    {
        en: 'Cup',
        ru: 'Чашка',
    },
    {
        en: 'Easily',
        ru: 'Легко',
    },
    {
        en: 'Expensively',
        ru: 'Дорого',
    },
    {
        en: 'Faster',
        ru: 'Быстрее',
    },
    {
        en: 'Glass',
        ru: 'Стакан',
    },
    {
        en: 'Goods',
        ru: 'Товар',
    },
    {
        en: 'Grammar',
        ru: 'Грамматика',
    },
    {
        en: 'Hate',
        ru: 'Ненавидеть',
    },
    {
        en: 'Improve',
        ru: 'Улучшать',
    },
    {
        en: 'Kind',
        ru: 'Добрый',
    },
    {
        en: 'Listening',
        ru: 'Аудирование',
    },
    {
        en: 'Morning',
        ru: 'Утро',
    },
    {
        en: 'Offer',
        ru: 'Предложение',
    },
    {
        en: 'Product',
        ru: 'Продукт',
    },
    {
        en: 'Rarely',
        ru: 'Редко',
    },
    {
        en: 'Rule',
        ru: 'Правило',
    },
    {
        en: 'Run',
        ru: 'Бегать',
    },
    {
        en: 'Slide',
        ru: 'Слайд',
    },
    {
        en: 'Soon',
        ru: 'Скоро',
    },
    {
        en: 'Speaking',
        ru: 'Речь',
    },
    {
        en: 'Stand up',
        ru: 'Встать',
    },
    {
        en: 'Stand',
        ru: 'Стоять',
    },
    {
        en: 'Wait',
        ru: 'Ждать',
    },
    {
        en: 'Advice',
        ru: 'Совет',
    },
    {
        en: 'Back',
        ru: 'Назад',
    },
    {
        en: 'Breakfast',
        ru: 'Завтрак',
    },
    {
        en: 'Bring',
        ru: 'Приносить',
    },
    {
        en: 'Dinner',
        ru: 'Ужин',
    },
    {
        en: 'First',
        ru: 'Первый',
    },
    {
        en: 'Follow',
        ru: 'Следовать',
    },
    {
        en: 'Great',
        ru: 'Большой',
    },
    {
        en: 'Lunch',
        ru: 'Обед',
    },
    {
        en: 'Museum',
        ru: 'Музей',
    },
    {
        en: 'Pleasure',
        ru: 'Удовольствие',
    },
    {
        en: 'Podcast',
        ru: 'Подкаст',
    },
    {
        en: 'Present',
        ru: 'Подарок',
    },
    {
        en: 'Project',
        ru: 'Проект',
    },
    {
        en: 'Recommendation',
        ru: 'Рекомендация',
    },
    {
        en: 'Sandwich',
        ru: 'Бутерброд',
    },
    {
        en: 'Second',
        ru: 'Второй',
    },
    {
        en: 'Theatre',
        ru: 'Театр',
    },
    {
        en: 'Third',
        ru: 'Третий',
    },
    {
        en: 'Tomorrow',
        ru: 'Завтра',
    },
    {
        en: 'Will',
        ru: 'Будет',
    },
    {
        en: 'Immediately',
        ru: 'Немедленно',
    },
    {
        en: 'Mobile phone',
        ru: 'Мобильный телефон',
    },
    {
        en: 'Office',
        ru: 'Офис',
    },
    {
        en: 'Party',
        ru: 'Вечеринка',
    },
    {
        en: 'Pass',
        ru: 'Сдавать',
    },
    {
        en: 'Refuse',
        ru: 'Отказываться',
    },
    {
        en: 'Restaurant',
        ru: 'Ресторан',
    },
    {
        en: 'Sign',
        ru: 'Подписать',
    },
    {
        en: 'Spain',
        ru: 'Испания',
    },
    {
        en: 'Successful',
        ru: 'Успешный',
    },
    {
        en: 'Supermarket',
        ru: 'Супермаркет',
    },
    {
        en: 'Tonight',
        ru: 'Сегодня вечером',
    },
    {
        en: 'Arrive',
        ru: 'Прибывать',
    },
    {
        en: 'Basketball',
        ru: 'Баскетбол',
    },
    {
        en: 'Convenient',
        ru: 'Удобный',
    },
    {
        en: 'Disagree',
        ru: 'Не соглашаться',
    },
    {
        en: 'Funny',
        ru: 'Смешной, забавный',
    },
    {
        en: 'Hard',
        ru: 'Тяжелый, усердно',
    },
    {
        en: 'Harder',
        ru: 'Усерднее',
    },
    {
        en: 'Higher',
        ru: 'Выше',
    },
    {
        en: 'Holiday',
        ru: 'Отпуск',
    },
    {
        en: 'Join',
        ru: 'Присоединиться',
    },
    {
        en: 'Laugh',
        ru: 'Смеяться',
    },
    {
        en: 'Match',
        ru: 'Матч',
    },
    {
        en: 'Ocean',
        ru: 'Океан',
    },
    {
        en: 'Rent',
        ru: 'Арендовать, аренда',
    },
    {
        en: 'Sea',
        ru: 'Море',
    },
    {
        en: 'Shopping',
        ru: 'Ходить по магазинам',
    },
    {
        en: 'Solve',
        ru: 'Решать',
    },
    {
        en: 'Summer',
        ru: 'Лето',
    },
    {
        en: 'Volleyball',
        ru: 'Волейбол',
    },
    {
        en: 'Absent',
        ru: 'Отсутствовать',
    },
    {
        en: 'Beach',
        ru: 'Пляж',
    },
    {
        en: 'Canada',
        ru: 'Канада',
    },
    {
        en: 'Else',
        ru: 'Еще',
    },
    {
        en: 'Gym',
        ru: 'Зал',
    },
    {
        en: 'Graduate',
        ru: 'Окончить',
    },
    {
        en: 'Long',
        ru: 'Длинный',
    },
    {
        en: 'News',
        ru: 'Новости',
    },
    {
        en: 'Surprise',
        ru: 'Удивлять',
    },
    {
        en: 'Whose',
        ru: 'Чей',
    },
    {
        en: 'Present',
        ru: 'Присутствующий',
    },
    {
        en: 'Last',
        ru: 'Длиться',
    },
    {
        en: 'Invite',
        ru: 'Приглашать',
    },
    {
        en: 'Lend',
        ru: 'Одалживать',
    },
    {
        en: 'Opportunity',
        ru: 'Возможность',
    },
    {
        en: 'Picnic',
        ru: 'Пикник',
    },
    {
        en: 'Prepare',
        ru: 'Подготовить',
    },
    {
        en: 'Return',
        ru: 'Возвращаться',
    },
    {
        en: 'Weekend',
        ru: 'Выходные',
    },
    {
        en: 'Zoo',
        ru: 'Зоопарк',
    },
    {
        en: 'Ago',
        ru: 'Назад',
    },
    {
        en: 'App',
        ru: 'Приложение',
    },
    {
        en: 'Compare',
        ru: 'Сравнивать',
    },
    {
        en: 'Fail',
        ru: 'Провалить',
    },
    {
        en: 'France',
        ru: 'Франция',
    },
    {
        en: 'High',
        ru: 'Высокий, высоко',
    },
    {
        en: 'Jump',
        ru: 'Прыгать',
    },
    {
        en: 'Link',
        ru: 'Ссылка',
    },
    {
        en: 'Move',
        ru: 'Двигаться',
    },
    {
        en: 'Quickly',
        ru: 'Быстро',
    },
    {
        en: 'Save',
        ru: 'Сохранять',
    },
    {
        en: 'Share',
        ru: 'Делиться',
    },
    {
        en: 'Training',
        ru: 'Тренировка',
    },
    {
        en: 'Trip',
        ru: 'Поездка',
    },
    {
        en: 'Yesterday',
        ru: 'Вчера',
    },
    {
        en: 'Correct',
        ru: 'Исправлять',
    },
    {
        en: 'Anything',
        ru: 'Что-либо',
    },
    {
        en: 'Badminton',
        ru: 'Бадминтон',
    },
    {
        en: 'Explain',
        ru: 'Объяснять',
    },
    {
        en: 'Forget',
        ru: 'Забывать',
    },
    {
        en: 'Friday',
        ru: 'Пятница',
    },
    {
        en: 'Lock',
        ru: 'Запирать',
    },
    {
        en: 'Monday',
        ru: 'Понедельник',
    },
    {
        en: 'Night',
        ru: 'Ночь',
    },
    {
        en: 'Past',
        ru: 'Прошлое',
    },
    {
        en: 'Physical',
        ru: 'Физический',
    },
    {
        en: 'Saturday',
        ru: 'Суббота',
    },
    {
        en: 'Sound',
        ru: 'Звук, звучать',
    },
    {
        en: 'Sunday',
        ru: 'Воскресенье',
    },
    {
        en: 'Thursday',
        ru: 'Четверг',
    },
    {
        en: 'Tuesday',
        ru: 'Вторник',
    },
    {
        en: 'Wednesday',
        ru: 'Среда',
    },
    {
        en: 'Word',
        ru: 'Слово',
    },
    {
        en: 'Country house',
        ru: 'Загородный дом',
    },
    {
        en: 'Before',
        ru: 'Перед, до',
    },
    {
        en: 'Beginning',
        ru: 'Начало',
    },
    {
        en: 'Birthday',
        ru: 'День рождения',
    },
    {
        en: 'End',
        ru: 'Конец',
    },
    {
        en: 'Large',
        ru: 'Большой',
    },
    {
        en: 'Marry',
        ru: 'Выйти замуж, жениться',
    },
    {
        en: 'Modern',
        ru: 'Современный',
    },
    {
        en: 'Produce',
        ru: 'Производить',
    },
    {
        en: 'Secret',
        ru: 'Секрет',
    },
    {
        en: 'Social',
        ru: 'Социальный, общественный',
    },
    {
        en: 'Society',
        ru: 'Общество',
    },
    {
        en: 'Surname',
        ru: 'Фамилия',
    },
    {
        en: 'Technology',
        ru: 'Технология',
    },
    {
        en: 'Decide',
        ru: 'Решать',
    },
    {
        en: 'Earlier',
        ru: 'Раньше',
    },
    {
        en: 'Sweater',
        ru: 'Свитер',
    },
    {
        en: 'Winter',
        ru: 'Зима',
    },
    {
        en: 'Final',
        ru: 'Окончательный',
    },
    {
        en: 'Happily',
        ru: 'Счастливо',
    },
    {
        en: 'Include',
        ru: 'Включать',
    },
    {
        en: 'Interview',
        ru: 'Интервью',
    },
    {
        en: 'Left',
        ru: 'Налево',
    },
    {
        en: 'Turn',
        ru: 'Поворачивать',
    },
    {
        en: 'Right',
        ru: 'Направо',
    },
    {
        en: 'Offer',
        ru: 'Предлагать',
    },
    {
        en: 'Hope',
        ru: 'Надеяться',
    },
    {
        en: 'Table tennis',
        ru: 'Настольный теннис',
    },
    {
        en: 'Animal',
        ru: 'Животное',
    },
    {
        en: 'Body',
        ru: 'Тело',
    },
    {
        en: 'Cry',
        ru: 'Плакать',
    },
    {
        en: 'Depend',
        ru: 'Зависеть',
    },
    {
        en: 'Face',
        ru: 'Лицо',
    },
    {
        en: 'Forest',
        ru: 'Лес',
    },
    {
        en: 'Hair',
        ru: 'Волосы',
    },
    {
        en: 'Kill',
        ru: 'Убивать',
    },
    {
        en: 'Kiss',
        ru: 'Поцелуй, целовать',
    },
    {
        en: 'Minute',
        ru: 'Минута',
    },
    {
        en: 'Myself',
        ru: 'Сам',
    },
    {
        en: 'Suddenly',
        ru: 'Вдруг',
    },
    {
        en: 'Wash',
        ru: 'Мыть',
    },
    {
        en: 'Achieve',
        ru: 'Достигать',
    },
    {
        en: 'Aim',
        ru: 'Цель',
    },
    {
        en: 'Always',
        ru: 'Всегда',
    },
    {
        en: 'Celebrate',
        ru: 'Праздновать',
    },
    {
        en: 'Die',
        ru: 'Умирать',
    },
    {
        en: 'Everyone',
        ru: 'Все, каждый',
    },
    {
        en: 'Longer',
        ru: 'Дольше',
    },
    {
        en: 'Discover',
        ru: 'Обнаружить',
    },
    {
        en: 'Armchair',
        ru: 'Кресло',
    },
    {
        en: 'Article',
        ru: 'статья',
    },
    {
        en: 'Beautifully',
        ru: 'Красиво',
    },
    {
        en: 'Break',
        ru: 'Ломать',
    },
    {
        en: 'Camel',
        ru: 'Верблюд',
    },
    {
        en: 'Chair',
        ru: 'Стул',
    },
    {
        en: 'Cut',
        ru: 'Резать',
    },
    {
        en: 'Favourite',
        ru: 'Любимый',
    },
    {
        en: 'Finger',
        ru: 'Палец',
    },
    {
        en: 'Flower',
        ru: 'Цветок',
    },
    {
        en: 'Fly',
        ru: 'Лететь',
    },
    {
        en: 'Himself',
        ru: 'Сам',
    },
    {
        en: 'Keep',
        ru: 'Хранить, держать',
    },
    {
        en: 'Loudly',
        ru: 'Громко',
    },
    {
        en: 'Pen',
        ru: 'Ручка',
    },
    {
        en: 'Perfectly',
        ru: 'Идеально',
    },
    {
        en: 'Promise',
        ru: 'Обещать, обещание',
    },
    {
        en: 'Sing',
        ru: 'Петь',
    },
    {
        en: 'The United Kingdom',
        ru: 'Соединенное королевство',
    },
    {
        en: 'sit down',
        ru: 'Садиться',
    },
    {
        en: 'break down',
        ru: 'Ломаться',
    },
    {
        en: 'Studies',
        ru: 'Учеба',
    },
    {
        en: 'Bridge',
        ru: 'Мост',
    },
    {
        en: 'Championship',
        ru: 'Чемпионат',
    },
    {
        en: 'Competition',
        ru: 'Соревнование',
    },
    {
        en: 'India',
        ru: 'Индия',
    },
    {
        en: 'Key',
        ru: 'Ключ',
    },
    {
        en: 'Lawyer',
        ru: 'Адвокат',
    },
    {
        en: 'Mathematics',
        ru: 'Математика',
    },
    {
        en: 'Mean',
        ru: 'Означать',
    },
    {
        en: 'Phrase',
        ru: 'Фраза',
    },
    {
        en: 'Quietly',
        ru: 'Тихо',
    },
    {
        en: 'Sentence',
        ru: 'Предложение',
    },
    {
        en: 'Sorry',
        ru: 'Извиняться',
    },
    {
        en: 'Wallet',
        ru: 'Бумажник',
    },
    {
        en: 'Banana',
        ru: 'Банан',
    },
    {
        en: 'Beer',
        ru: 'Пиво',
    },
    {
        en: 'Copy',
        ru: 'Копия',
    },
    {
        en: 'Desk',
        ru: 'Письменный стол',
    },
    {
        en: 'Fall',
        ru: 'Падать',
    },
    {
        en: 'Kilo',
        ru: 'Кило',
    },
    {
        en: 'Paper',
        ru: 'Бумага',
    },
    {
        en: 'Potatoes',
        ru: 'Картошка',
    },
    {
        en: 'Then',
        ru: 'Затем',
    },
    {
        en: 'Then',
        ru: 'Затем',
    },
    {
        en: 'Tree',
        ru: 'Дерево',
    },
    {
        en: 'Wine',
        ru: 'Вино',
    },
    {
        en: 'Too',
        ru: 'Слишком',
    },
    {
        en: 'As',
        ru: 'Как',
    },
    {
        en: 'Be away',
        ru: 'Отсутствовать',
    },
    {
        en: 'Famous',
        ru: 'Известный',
    },
    {
        en: 'Gift',
        ru: 'Подарок',
    },
    {
        en: 'Guest',
        ru: 'Гость',
    },
    {
        en: 'Hungry',
        ru: 'Голодный',
    },
    {
        en: 'Ill',
        ru: 'Больной',
    },
    {
        en: 'Normal',
        ru: 'Нормальный',
    },
    {
        en: 'Be out',
        ru: 'Быть не дома',
    },
    {
        en: 'Special',
        ru: 'Особенный, специальный',
    },
    {
        en: 'Terrible',
        ru: 'Ужасный',
    },
    {
        en: 'Tired',
        ru: 'Уставший',
    },
    {
        en: 'Village',
        ru: 'Деревня',
    },
    {
        en: 'Worst',
        ru: 'Худший',
    },
    {
        en: 'Alone',
        ru: 'Одинокий, один',
    },
    {
        en: 'Autumn',
        ru: 'Осень',
    },
    {
        en: 'Garden',
        ru: 'Сад',
    },
    {
        en: 'Healthy',
        ru: 'Здоровый',
    },
    {
        en: 'Ineffective',
        ru: 'Неэффективный',
    },
    {
        en: 'Pocket',
        ru: 'Карман',
    },
    {
        en: 'Spring',
        ru: 'Весна',
    },
    {
        en: 'Bathroom',
        ru: 'Ванная',
    },
    {
        en: 'Century',
        ru: 'Век',
    },
    {
        en: 'Living room',
        ru: 'Гостиная',
    },
    {
        en: 'Optimistic',
        ru: 'Оптимистичный',
    },
    {
        en: 'Pessimistic',
        ru: 'Пессимистичный',
    },
    {
        en: 'Behind',
        ru: 'За',
    },
    {
        en: 'Classroom',
        ru: 'Классная комната',
    },
    {
        en: 'Corner',
        ru: 'Угол',
    },
    {
        en: 'Incorrect',
        ru: 'Неправильный',
    },
    {
        en: 'Unusual',
        ru: 'Необычный',
    },
    {
        en: 'Yard',
        ru: 'Двор',
    },
    {
        en: 'Dentist',
        ru: 'Зубной врач, стоматолог',
    },
    {
        en: 'Engineer',
        ru: 'Инженер',
    },
    {
        en: 'Impossible',
        ru: 'Невозможно',
    },
    {
        en: 'Lonely',
        ru: 'Одинокий',
    },
    {
        en: 'Motivating',
        ru: 'Мотивирующий',
    },
    {
        en: 'At all',
        ru: 'Вовсе, совсем',
    },
    {
        en: 'But',
        ru: 'Но',
    },
    {
        en: 'Contract',
        ru: 'Контракт',
    },
    {
        en: 'Fence',
        ru: 'Забор',
    },
    {
        en: 'Herself',
        ru: 'Сама',
    },
    {
        en: 'Homemade',
        ru: 'Домашний',
    },
    {
        en: 'Hot',
        ru: 'Горячий',
    },
    {
        en: 'Hour',
        ru: 'Час',
    },
    {
        en: 'Meeting',
        ru: 'Встреча',
    },
    {
        en: 'Over',
        ru: 'Через',
    },
    {
        en: 'River',
        ru: 'Река',
    },
    {
        en: 'Rope',
        ru: 'Веревка',
    },
    {
        en: 'Sooner',
        ru: 'Скорее',
    },
    {
        en: 'Street',
        ru: 'Улица',
    },
    {
        en: 'Yourself',
        ru: 'Сам',
    },
    {
        en: 'By',
        ru: 'По, у',
    },
    {
        en: 'Factor',
        ru: 'Фактор',
    },
    {
        en: 'Most',
        ru: 'Большинство',
    },
    {
        en: 'Smoking',
        ru: 'Курение',
    },
    {
        en: 'Topic',
        ru: 'Тема',
    },
    {
        en: 'Artist',
        ru: 'Художник',
    },
    {
        en: 'A bit',
        ru: 'Немного',
    },
    {
        en: 'Company',
        ru: 'Компания',
    },
    {
        en: 'Ground',
        ru: 'Земля',
    },
    {
        en: 'Happiness',
        ru: 'Счастье',
    },
    {
        en: 'Kindness',
        ru: 'Доброта',
    },
    {
        en: 'Parcel',
        ru: 'Посылка',
    },
    {
        en: 'Pie',
        ru: 'Пирог',
    },
    {
        en: 'Process',
        ru: 'Процесс',
    },
    {
        en: 'Accident',
        ru: 'Авария',
    },
    {
        en: 'Alcohol',
        ru: 'Алкоголь',
    },
    {
        en: 'Bill',
        ru: 'Счет',
    },
    {
        en: 'Cafe',
        ru: 'Кафе',
    },
    {
        en: 'Chance',
        ru: 'Шанс',
    },
    {
        en: 'Criminal',
        ru: 'Преступник',
    },
    {
        en: 'Health',
        ru: 'Здоровье',
    },
    {
        en: 'If',
        ru: 'Если',
    },
    {
        en: 'Point',
        ru: 'Точка',
    },
    {
        en: 'Screen',
        ru: 'Экран',
    },
    {
        en: 'View',
        ru: 'Вид, зрение',
    },
    {
        en: 'Bicycle',
        ru: 'Велосипед',
    },
    {
        en: 'Butter',
        ru: 'Масло',
    },
    {
        en: 'Cheese',
        ru: 'Сыр',
    },
    {
        en: 'Desert',
        ru: 'Пустыня',
    },
    {
        en: 'Donkey',
        ru: 'Осел',
    },
    {
        en: 'Egg',
        ru: 'Яйцо',
    },
    {
        en: 'Hand',
        ru: 'Рука',
    },
    {
        en: 'Head',
        ru: 'Голова',
    },
    {
        en: 'Knowledge',
        ru: 'Знания',
    },
    {
        en: 'Material',
        ru: 'Материал',
    },
    {
        en: 'Several',
        ru: 'Несколько',
    },
    {
        en: 'Between',
        ru: 'Между',
    },
    {
        en: 'Blogger',
        ru: 'Блоггер',
    },
    {
        en: 'Cell Phone',
        ru: 'Мобильный телефон',
    },
    {
        en: 'Circus',
        ru: 'Цирк',
    },
    {
        en: 'Delicious',
        ru: 'Вкусный',
    },
    {
        en: 'Dictionary',
        ru: 'Словарь',
    },
    {
        en: 'Fashionable',
        ru: 'Модный',
    },
    {
        en: 'Just',
        ru: 'Просто',
    },
    {
        en: 'Mostly',
        ru: 'В основном',
    },
    {
        en: 'Speech',
        ru: 'Речь',
    },
    {
        en: 'Accent',
        ru: 'Акцент',
    },
    {
        en: 'Appreciate',
        ru: 'Ценить',
    },
    {
        en: 'Area',
        ru: 'Область',
    },
    {
        en: 'Brilliant',
        ru: 'Блестящий',
    },
    {
        en: 'Classical',
        ru: 'Классический',
    },
    {
        en: 'Cycling',
        ru: 'Катание на велосипеде',
    },
    {
        en: 'Department',
        ru: 'Отдел',
    },
    {
        en: 'Enjoy',
        ru: 'Обожать',
    },
    {
        en: 'Excellent',
        ru: 'Отличный',
    },
    {
        en: 'Experience',
        ru: 'Опыт',
    },
    {
        en: 'Jogging',
        ru: 'Бег трусцой',
    },
    {
        en: 'Swimming pool',
        ru: 'Бассейн',
    },
    {
        en: 'Twice',
        ru: 'Дважды',
    },
    {
        en: 'Vocabulary',
        ru: 'Словарь',
    },
    {
        en: 'Shop assistant',
        ru: 'Продавец',
    },
    {
        en: 'Advanced',
        ru: 'Продвинутый',
    },
    {
        en: 'Baby',
        ru: 'Ребенок',
    },
    {
        en: 'Basic',
        ru: 'Основной, базовый',
    },
    {
        en: 'Black',
        ru: 'Черный',
    },
    {
        en: 'Blonde',
        ru: 'Светлый',
    },
    {
        en: 'Blue',
        ru: 'Синий',
    },
    {
        en: 'Building',
        ru: 'Здание',
    },
    {
        en: 'Cold',
        ru: 'Холодный',
    },
    {
        en: 'Colour',
        ru: 'Цвет',
    },
    {
        en: 'Device',
        ru: 'Устройство',
    },
    {
        en: 'Effect',
        ru: 'Эффект',
    },
    {
        en: 'Financial',
        ru: 'Финансовый',
    },
    {
        en: 'Fresh',
        ru: 'Свежий',
    },
    {
        en: 'Fruit',
        ru: 'Фрукты',
    },
    {
        en: 'Green',
        ru: 'Зеленый',
    },
    {
        en: 'Intermediate',
        ru: 'Средний',
    },
    {
        en: 'Low',
        ru: 'Низкий',
    },
    {
        en: 'Pencil',
        ru: 'Карандаш',
    },
    {
        en: 'Pleasant',
        ru: 'Приятный',
    },
    {
        en: 'Positive',
        ru: 'Позитивный, положительный',
    },
    {
        en: 'Profitable',
        ru: 'Прибыльный',
    },
    {
        en: 'Short',
        ru: 'Короткий',
    },
    {
        en: 'Small',
        ru: 'Маленький',
    },
    {
        en: 'Strong',
        ru: 'Сильный',
    },
    {
        en: 'Town',
        ru: 'Город',
    },
    {
        en: 'Vegetables',
        ru: 'Овощи',
    },
    {
        en: 'Voice',
        ru: 'Голос',
    },
    {
        en: 'Warm',
        ru: 'Теплый',
    },
    {
        en: 'Achievement',
        ru: 'Достижение',
    },
    {
        en: 'Amazing',
        ru: 'Удивительный',
    },
    {
        en: 'Common',
        ru: 'Распространенный',
    },
    {
        en: 'Detail',
        ru: 'Деталь',
    },
    {
        en: 'Event',
        ru: 'Событие',
    },
    {
        en: 'Expert',
        ru: 'Эксперт',
    },
    {
        en: 'Friendly',
        ru: 'Дружелюбный',
    },
    {
        en: 'Generous',
        ru: 'Щедрый',
    },
    {
        en: 'Guy',
        ru: 'Парень',
    },
    {
        en: 'Hospitable',
        ru: 'Гостеприимный',
    },
    {
        en: 'Number',
        ru: 'Число, номер',
    },
    {
        en: 'Partner',
        ru: 'Партнер',
    },
    {
        en: 'Realise',
        ru: 'Осознавать',
    },
    {
        en: 'Unique',
        ru: 'Уникальный',
    },
    {
        en: 'Custom',
        ru: 'Обычай',
    },
    {
        en: 'Differently',
        ru: 'По другому, иначе',
    },
    {
        en: 'Extremely',
        ru: 'Чрезвычайно',
    },
    {
        en: 'Fantastic',
        ru: 'Фантастический',
    },
    {
        en: 'Huge',
        ru: 'Огромный',
    },
    {
        en: 'Learner',
        ru: 'Ученик',
    },
    {
        en: 'Lovely',
        ru: 'Прекрасный',
    },
    {
        en: 'Official',
        ru: 'Официальный',
    },
    {
        en: 'Roof',
        ru: 'Крыша',
    },
    {
        en: 'Shock',
        ru: 'Шок, шокировать',
    },
    {
        en: 'Solution',
        ru: 'Решение',
    },
    {
        en: 'Statement',
        ru: 'Утверждение',
    },
    {
        en: 'Success',
        ru: 'Успех',
    },
    {
        en: 'Typical',
        ru: 'Типичный',
    },
    {
        en: 'Waste',
        ru: 'Трата, тритить',
    },
    {
        en: 'Boss',
        ru: 'Босс',
    },
    {
        en: 'Carefully',
        ru: 'Осторожно',
    },
    {
        en: 'Credit card',
        ru: 'Кредитная карта',
    },
    {
        en: 'Elder sister',
        ru: 'Старшая сестра',
    },
    {
        en: 'Following',
        ru: 'Следующий',
    },
    {
        en: 'Freelancer',
        ru: 'Фрилансер',
    },
    {
        en: 'Greatly',
        ru: 'Значительно, очень сильно',
    },
    {
        en: 'Hang',
        ru: 'Вешать',
    },
    {
        en: 'Inspire',
        ru: 'Вдохновлять',
    },
    {
        en: 'Interrupt',
        ru: 'Прерывать',
    },
    {
        en: 'Lots of',
        ru: 'Много',
    },
    {
        en: 'Opinion',
        ru: 'Мнение',
    },
    {
        en: 'Others',
        ru: 'Другие',
    },
    {
        en: 'Patient',
        ru: 'Пациент',
    },
    {
        en: 'Picture',
        ru: 'Картина',
    },
    {
        en: 'Poster',
        ru: 'Плакат',
    },
    {
        en: 'Sale',
        ru: 'Продажа, распродажа',
    },
    {
        en: 'Shoes',
        ru: 'Обувь',
    },
    {
        en: 'Store',
        ru: 'Магазин',
    },
    {
        en: 'Online store',
        ru: 'Интернет магазин',
    },
    {
        en: 'Such',
        ru: 'Такой',
    },
    {
        en: 'Teenager',
        ru: 'Подросток',
    },
    {
        en: 'Vet',
        ru: 'Ветеринар',
    },
    {
        en: 'Wall',
        ru: 'Стена',
    },
    {
        en: 'Way',
        ru: 'Путь',
    },
    {
        en: 'Weak',
        ru: 'Слабый',
    },
    {
        en: 'Younger brother',
        ru: 'Младший брат',
    },
    {
        en: 'Accountant',
        ru: 'Бухгалтер',
    },
    {
        en: 'Bedroom',
        ru: 'Спальня',
    },
    {
        en: 'Bright',
        ru: 'Яркий',
    },
    {
        en: 'Chess',
        ru: 'Шахматы',
    },
    {
        en: 'College',
        ru: 'Колледж',
    },
    {
        en: 'Comment',
        ru: 'Комментарий',
    },
    {
        en: 'Disappointed',
        ru: 'Разочарованный',
    },
    {
        en: 'Diving',
        ru: 'Дайвинг',
    },
    {
        en: 'Drawing',
        ru: 'Рисование',
    },
    {
        en: 'Episode',
        ru: 'Эпизод',
    },
    {
        en: 'Expression',
        ru: 'Выражение',
    },
    {
        en: 'Fifteen',
        ru: 'Пятнадцать',
    },
    {
        en: 'Gardening',
        ru: 'Садоводство',
    },
    {
        en: 'Genius',
        ru: 'Гениальный',
    },
    {
        en: 'Heavy',
        ru: 'Тяжелый',
    },
    {
        en: 'Hobby',
        ru: 'Хобби',
    },
    {
        en: 'Humour',
        ru: 'Юмор',
    },
    {
        en: 'Jacket',
        ru: 'Куртка',
    },
    {
        en: 'Lamp',
        ru: 'Лампа',
    },
    {
        en: 'Learning',
        ru: 'Обучение',
    },
    {
        en: 'Lecture',
        ru: 'Лекция',
    },
    {
        en: 'Main',
        ru: 'Главный',
    },
    {
        en: 'Nurse',
        ru: 'Медсестра',
    },
    {
        en: 'Prison',
        ru: 'Тюрьма',
    },
    {
        en: 'Resource',
        ru: 'Ресурс',
    },
    {
        en: 'Sense',
        ru: 'Чувство',
    },
    {
        en: 'Shocked',
        ru: 'Шокированный',
    },
    {
        en: 'Skiing',
        ru: 'Катание на лыжах',
    },
    {
        en: 'Suit',
        ru: 'Костюм',
    },
    {
        en: 'Surprised',
        ru: 'Удивленный',
    },
    {
        en: 'Taste',
        ru: 'Вкус',
    },
    {
        en: 'Thief',
        ru: 'Вор',
    },
    {
        en: 'Towel',
        ru: 'Полотенце',
    },
    {
        en: 'Ambitious',
        ru: 'Амбициозный',
    },
    {
        en: 'Bed',
        ru: 'Кровать',
    },
    {
        en: 'Bottle',
        ru: 'Бутылка',
    },
    {
        en: 'Church',
        ru: 'Церковь',
    },
    {
        en: 'Earth',
        ru: 'Земля',
    },
    {
        en: 'Empty',
        ru: 'Пустой',
    },
    {
        en: 'Energy',
        ru: 'Энергия',
    },
    {
        en: 'Enthusiasm',
        ru: 'Энтузиазм',
    },
    {
        en: 'Experienced',
        ru: 'Опытный',
    },
    {
        en: 'Feeling',
        ru: 'Чувство',
    },
    {
        en: 'Full',
        ru: 'Полный',
    },
    {
        en: 'Joke',
        ru: 'Шутка',
    },
    {
        en: 'Narrow',
        ru: 'Узкий',
    },
    {
        en: 'Obvious',
        ru: 'Очевидный',
    },
    {
        en: 'Police',
        ru: 'Полиция',
    },
    {
        en: 'Rainy',
        ru: 'Дождливый',
    },
    {
        en: 'Road',
        ru: 'Дорога',
    },
    {
        en: 'Round',
        ru: 'Круглый',
    },
    {
        en: 'Slim',
        ru: 'Стройный',
    },
    {
        en: 'Sunny',
        ru: 'Солнеыный',
    },
    {
        en: 'Thin',
        ru: 'Худой',
    },
    {
        en: 'Understanding',
        ru: 'Понимание',
    },
    {
        en: 'Uninformative',
        ru: 'Неинформативный',
    },
    {
        en: 'Wide',
        ru: 'Широкий',
    },
    {
        en: 'Anymore',
        ru: 'Больше не',
    },
    {
        en: 'Belong',
        ru: 'Принадлежать',
    },
    {
        en: 'Class',
        ru: 'Класс',
    },
    {
        en: 'Clean',
        ru: 'Чистый, чистить',
    },
    {
        en: 'Difference',
        ru: 'Разница',
    },
    {
        en: 'Guitar',
        ru: 'Гитара',
    },
    {
        en: 'Jazz',
        ru: 'Джаз',
    },
    {
        en: 'Lead',
        ru: 'Вести',
    },
    {
        en: 'Lifestyle',
        ru: 'Образ жизни',
    },
    {
        en: 'Magazine',
        ru: 'Журнал',
    },
    {
        en: 'Newspaper',
        ru: 'Газета',
    },
    {
        en: 'Piano',
        ru: 'Пианино',
    },
    {
        en: 'Pop music',
        ru: 'Поп-музыка',
    },
    {
        en: 'Public',
        ru: 'Общественный',
    },
    {
        en: 'Relative',
        ru: 'Родственник',
    },
    {
        en: 'Rock',
        ru: 'Рок, скала',
    },
    {
        en: 'Snowboarding',
        ru: 'Катание на сноуборде',
    },
    {
        en: 'Transport',
        ru: 'Транспорт',
    },
    {
        en: 'Violin',
        ru: 'Скрипка',
    },
    {
        en: 'Close',
        ru: 'Близкий',
    },
    {
        en: 'Among',
        ru: 'Среди',
    },
    {
        en: 'Crazy',
        ru: 'Сумасшедший',
    },
    {
        en: 'Deep',
        ru: 'Глубоко, глубокий',
    },
    {
        en: 'Dream',
        ru: 'Мечта, мечтать',
    },
    {
        en: 'Economics',
        ru: 'Экономика',
    },
    {
        en: 'Ingredient',
        ru: 'Ингредиент',
    },
    {
        en: 'Irregular',
        ru: 'Нерегулярный',
    },
    {
        en: 'Interested',
        ru: 'Заинтересованный',
    },
    {
        en: 'Lake',
        ru: 'Озеро',
    },
    {
        en: 'Mad',
        ru: 'Сумасшедший',
    },
    {
        en: 'Natural',
        ru: 'Натуральный, естественный',
    },
    {
        en: 'Regular',
        ru: 'Регулярный',
    },
    {
        en: 'Risk',
        ru: 'Риск, рисковать',
    },
    {
        en: 'Unfortunately',
        ru: 'К сожалению',
    },
    {
        en: 'Unofficial',
        ru: 'Неофициальный',
    },
    {
        en: 'Verb',
        ru: 'Глагол',
    },
    {
        en: 'Apologize',
        ru: 'Извиняться',
    },
    {
        en: 'Clinic',
        ru: 'Клиника',
    },
    {
        en: 'Confidence',
        ru: 'Уверенность',
    },
    {
        en: 'Dependent',
        ru: 'Зависимый',
    },
    {
        en: 'Financially',
        ru: 'Финансово',
    },
    {
        en: 'Illness',
        ru: 'Болезнь',
    },
    {
        en: 'Independent',
        ru: 'Независимый',
    },
    {
        en: 'Necklace',
        ru: 'Ожерелье',
    },
    {
        en: 'Nervous',
        ru: 'Нервный',
    },
    {
        en: 'Salary',
        ru: 'Зарплата',
    },
    {
        en: 'Sick',
        ru: 'Больной',
    },
    {
        en: 'Surgeon',
        ru: 'Хирург',
    },
    {
        en: 'Task',
        ru: 'Задача',
    },
    {
        en: 'Translator',
        ru: 'Переводчик',
    },
    {
        en: 'Unimportant',
        ru: 'Неважный',
    },
    {
        en: 'Well-paid',
        ru: 'Хорошо оплачиваемый',
    },
    {
        en: 'Agency',
        ru: 'Агенство',
    },
    {
        en: 'Behaviour',
        ru: 'Поведение',
    },
    {
        en: 'Classmate',
        ru: 'Одноклассник',
    },
    {
        en: 'Client',
        ru: 'Клиент',
    },
    {
        en: 'Comfortable',
        ru: 'Удобный',
    },
    {
        en: 'Complain',
        ru: 'Жаловаться',
    },
    {
        en: 'Condition',
        ru: 'Состояние',
    },
    {
        en: 'Consider',
        ru: 'Рассматривать',
    },
    {
        en: 'Design',
        ru: 'Дизайн',
    },
    {
        en: 'Employee',
        ru: 'Работник',
    },
    {
        en: 'Exist',
        ru: 'Существовать',
    },
    {
        en: 'Groupmate',
        ru: 'Одногруппник',
    },
    {
        en: 'Invest',
        ru: 'Инвестировать',
    },
    {
        en: 'Investor',
        ru: 'Инвестор',
    },
    {
        en: 'Matter',
        ru: 'Иметь значение',
    },
    {
        en: 'Overpay',
        ru: 'Переплачивать',
    },
    {
        en: 'Perfect',
        ru: 'Идеальный',
    },
    {
        en: 'Profit',
        ru: 'Прибыль',
    },
    {
        en: 'Quality',
        ru: 'Качество',
    },
    {
        en: 'Reliable',
        ru: 'Надежный',
    },
    {
        en: 'Robot',
        ru: 'Робот',
    },
    {
        en: 'Sales',
        ru: 'Продажи',
    },
    {
        en: 'Satisfaction',
        ru: 'Удовлетворение',
    },
    {
        en: 'Science',
        ru: 'Наука',
    },
    {
        en: 'Seriously',
        ru: 'Серьезно',
    },
    {
        en: 'Shirt',
        ru: 'Рубашка',
    },
    {
        en: 'Size',
        ru: 'Размер',
    },
    {
        en: 'Skirt',
        ru: 'Юбка',
    },
    {
        en: 'Surprising',
        ru: 'Удивительный',
    },
    {
        en: 'Tourist',
        ru: 'Турист',
    },
    {
        en: 'Weigh',
        ru: 'Взвешивать',
    },
    {
        en: 'Chemistry',
        ru: 'Химия',
    },
    {
        en: 'Community',
        ru: 'Сообщество',
    },
    {
        en: 'Composition',
        ru: 'Сочинение',
    },
    {
        en: 'Economy',
        ru: 'Экономика',
    },
    {
        en: 'Essay',
        ru: 'Сочинение',
    },
    {
        en: 'History',
        ru: 'История',
    },
    {
        en: 'Image',
        ru: 'Образ',
    },
    {
        en: 'Model',
        ru: 'Модель',
    },
    {
        en: 'Organization',
        ru: 'Организация',
    },
    {
        en: 'Outside',
        ru: 'Снаружи',
    },
    {
        en: 'Powerful',
        ru: 'Мощный',
    },
    {
        en: 'Reputation',
        ru: 'Репутация',
    },
    {
        en: 'Tall',
        ru: 'Высокий',
    },
    {
        en: 'Tax',
        ru: 'Налог',
    },
    {
        en: 'Windy',
        ru: 'Ветреный',
    },
    {
        en: 'Present',
        ru: 'Настоящее',
    },
    {
        en: 'Around',
        ru: 'Вокруг',
    },
    {
        en: 'Develop',
        ru: 'Развивать',
    },
    {
        en: 'Fitness',
        ru: 'Фитнес',
    },
    {
        en: 'French',
        ru: 'Французский',
    },
    {
        en: 'Imagination',
        ru: 'Воображение',
    },
    {
        en: 'Income',
        ru: 'Доход',
    },
    {
        en: 'Instructor',
        ru: 'Инструктор',
    },
    {
        en: 'Marketing',
        ru: 'Маркетинг',
    },
    {
        en: 'Musician',
        ru: 'Музыкант',
    },
    {
        en: 'On your own',
        ru: 'Самостоятельно',
    },
    {
        en: 'Personal',
        ru: 'Личный',
    },
    {
        en: 'President',
        ru: 'Президент',
    },
    {
        en: 'Scientist',
        ru: 'Ученый',
    },
    {
        en: 'Separately',
        ru: 'Отдельно',
    },
    {
        en: 'Series',
        ru: 'Сериал',
    },
    {
        en: 'Skill',
        ru: 'Навык',
    },
    {
        en: 'Specialist',
        ru: 'Специалист',
    },
    {
        en: 'Stable',
        ru: 'Стабильный',
    },
    {
        en: 'World',
        ru: 'Мир',
    },
    {
        en: 'by yourself',
        ru: 'Сам, самостоятельно',
    },
    {
        en: 'by myself',
        ru: 'Сам, самостоятельно',
    },
    {
        en: 'British',
        ru: 'Британский',
    },
    {
        en: 'Cousin',
        ru: 'Двоюродная сестра, двоюродный брат',
    },
    {
        en: 'Dish',
        ru: 'Блюдо',
    },
    {
        en: 'Inexpensive',
        ru: 'Недорогой',
    },
    {
        en: 'Noisy',
        ru: 'Шумный',
    },
    {
        en: 'Offline',
        ru: 'Оффлайн',
    },
    {
        en: 'Proud',
        ru: 'Гордый',
    },
    {
        en: 'Quite',
        ru: 'Довольно',
    },
    {
        en: 'Routine',
        ru: 'Рутина',
    },
    {
        en: 'Step',
        ru: 'Шаг',
    },
    {
        en: 'Tongue',
        ru: 'Язык',
    },
    {
        en: 'Traditional',
        ru: 'Традиционный',
    },
    {
        en: 'Account',
        ru: 'Аккаунт, счет',
    },
    {
        en: 'Behave',
        ru: 'Вести себя',
    },
    {
        en: 'Crisis',
        ru: 'Кризис',
    },
    {
        en: 'Economic',
        ru: 'Экономический',
    },
    {
        en: 'Premium',
        ru: 'Премиум',
    },
    {
        en: 'Purpose',
        ru: 'Цель',
    },
    {
        en: 'Respect',
        ru: 'Уважать',
    },
    {
        en: 'Spoil',
        ru: 'Портить',
    },
    {
        en: 'Strangely',
        ru: 'Странно',
    },
    {
        en: 'Vegetarian',
        ru: 'Вегетарианец',
    },
    {
        en: 'Version',
        ru: 'Версия',
    },
    {
        en: 'Acquaintance',
        ru: 'Знакомый',
    },
    {
        en: 'Adapt',
        ru: 'Адаптироваться',
    },
    {
        en: 'Architect',
        ru: 'Архитектор',
    },
    {
        en: 'Depressed',
        ru: 'Подавленный',
    },
    {
        en: 'Depression',
        ru: 'Депрессия',
    },
    {
        en: 'Difficulty',
        ru: 'Трудность',
    },
    {
        en: 'Economist',
        ru: 'Экономист',
    },
    {
        en: 'Explanation',
        ru: 'Объяснение',
    },
    {
        en: 'Firm',
        ru: 'Фирма',
    },
    {
        en: 'Grow',
        ru: 'Расти',
    },
    {
        en: 'Immigrant',
        ru: 'Иммигрант',
    },
    {
        en: 'Provide',
        ru: 'Предоставлять',
    },
    {
        en: 'Role',
        ru: 'Роль',
    },
    {
        en: 'Suffer',
        ru: 'Страдать',
    },
    {
        en: 'Talented',
        ru: 'Талантливый',
    },
    {
        en: 'District',
        ru: 'Район',
    },
    {
        en: 'Easygoing',
        ru: 'Спокойный, добродушный',
    },
    {
        en: 'Grade',
        ru: 'Оценка',
    },
    {
        en: 'Inside',
        ru: 'Внутри',
    },
    {
        en: 'Kid',
        ru: 'Ребенок',
    },
    {
        en: 'Mark',
        ru: 'Оценка',
    },
    {
        en: 'Melodic',
        ru: 'Мелодичный',
    },
    {
        en: 'Membership',
        ru: 'Членство',
    },
    {
        en: 'Overcrowded',
        ru: 'Переполненный',
    },
    {
        en: 'Policeman',
        ru: 'Полицейский',
    },
    {
        en: 'Schoolboy',
        ru: 'Школьник',
    },
    {
        en: 'Spacious',
        ru: 'Просторный',
    },
    {
        en: 'Spoilt',
        ru: 'Испорченный',
    },
    {
        en: 'Unexpected',
        ru: 'Неожиданный',
    },
    {
        en: 'Point',
        ru: 'Указывать',
    },
    {
        en: 'Age',
        ru: 'Возраст',
    },
    {
        en: 'Channel',
        ru: 'Канал',
    },
    {
        en: 'Confident',
        ru: 'Уверенный',
    },
    {
        en: 'Eighty',
        ru: 'Восемьдесят',
    },
    {
        en: 'Elementary',
        ru: 'Элементарный',
    },
    {
        en: 'Grandparents',
        ru: 'Дедушка и бабушка',
    },
    {
        en: 'Granny',
        ru: 'Бабушка',
    },
    {
        en: 'Mountain',
        ru: 'Гора',
    },
    {
        en: 'Outstanding',
        ru: 'Выдающийся',
    },
    {
        en: 'Pregnant',
        ru: 'Беременная',
    },
    {
        en: 'Smell',
        ru: 'Запах',
    },
    {
        en: 'Stressful',
        ru: 'Стрессовый',
    },
    {
        en: 'Completely',
        ru: 'Полностью',
    },
    {
        en: 'Risky',
        ru: 'Рискованный',
    },
    {
        en: 'Interest',
        ru: 'Интерес',
    },
    {
        en: 'Accurate',
        ru: 'Точный',
    },
    {
        en: 'Attention',
        ru: 'Внимание',
    },
    {
        en: 'Attract',
        ru: 'Привлекать',
    },
    {
        en: 'Attractive',
        ru: 'Привлекатальный',
    },
    {
        en: 'Description',
        ru: 'Описание',
    },
    {
        en: 'Expect',
        ru: 'Ожидать',
    },
    {
        en: 'Frighten',
        ru: 'Бояться',
    },
    {
        en: 'Shocking',
        ru: 'Шокирующий',
    },
    {
        en: 'Stylish',
        ru: 'Стильный',
    },
    {
        en: 'Air',
        ru: 'Воздух',
    },
    {
        en: 'Bowling',
        ru: 'Боулинг',
    },
    {
        en: 'Breathe',
        ru: 'Дышать',
    },
    {
        en: 'Calories',
        ru: 'Калории',
    },
    {
        en: 'Charity',
        ru: 'Благотворительность',
    },
    {
        en: 'Draw',
        ru: 'Рисовать',
    },
    {
        en: 'Fond of',
        ru: 'Любить, обожать',
    },
    {
        en: 'Golf',
        ru: 'Гольф',
    },
    {
        en: 'Grandfather',
        ru: 'Дедушка',
    },
    {
        en: 'Grandmother',
        ru: 'Бабушка',
    },
    {
        en: 'Judo',
        ru: 'Дзюдо',
    },
    {
        en: 'Karate',
        ru: 'Каратэ',
    },
    {
        en: 'Keen on',
        ru: 'Увлекться',
    },
    {
        en: 'Mind',
        ru: 'Ум',
    },
    {
        en: 'Nothing',
        ru: 'Ничего',
    },
    {
        en: 'Particularly',
        ru: 'Особенно',
    },
    {
        en: 'Soccer',
        ru: 'Футбол',
    },
    {
        en: 'Spare time',
        ru: 'Свободный',
    },
    {
        en: 'Circle',
        ru: 'Круг',
    },
    {
        en: 'Couple',
        ru: 'Пара',
    },
    {
        en: 'Criticism',
        ru: 'Критика',
    },
    {
        en: 'Factory',
        ru: 'Фабрика, завод',
    },
    {
        en: 'Feed',
        ru: 'Кормить',
    },
    {
        en: 'Knife',
        ru: 'Нож',
    },
    {
        en: 'Never',
        ru: 'Никогда',
    },
    {
        en: 'Prestigious',
        ru: 'Престижный',
    },
    {
        en: 'Repeat',
        ru: 'Повторять',
    },
    {
        en: 'Resort',
        ru: 'Курорт',
    },
    {
        en: 'Scissors',
        ru: 'Ножницы',
    },
    {
        en: 'Throw',
        ru: 'Бросать',
    },
    {
        en: 'a.m',
        ru: 'Утра',
    },
    {
        en: 'Carry',
        ru: 'Нести',
    },
    {
        en: 'Count on',
        ru: 'Рассчитывать на',
    },
    {
        en: 'Crossroads',
        ru: 'Напротив',
    },
    {
        en: 'In front of',
        ru: 'Спереди',
    },
    {
        en: 'Imagine',
        ru: 'Представить',
    },
    {
        en: 'Off',
        ru: 'С, выключено',
    },
    {
        en: 'p.m',
        ru: 'Вечера',
    },
    {
        en: 'Post',
        ru: 'Почта',
    },
    {
        en: 'Pretty',
        ru: 'Довольно, милый',
    },
    {
        en: 'Ring',
        ru: 'Звонить, кольцо',
    },
    {
        en: 'Thank',
        ru: 'Благодарить',
    },
    {
        en: 'Villa',
        ru: 'Вилла',
    },
    {
        en: 'Add',
        ru: 'Добавлять',
    },
    {
        en: 'Belt',
        ru: 'Ремень',
    },
    {
        en: 'Businessmen',
        ru: 'Бизнесмены',
    },
    {
        en: 'Clearly',
        ru: 'Ясно',
    },
    {
        en: 'Daily',
        ru: 'Ежедневно',
    },
    {
        en: 'Deliver',
        ru: 'Доставить',
    },
    {
        en: 'Dishes',
        ru: 'Посуда',
    },
    {
        en: 'Express',
        ru: 'Выражать',
    },
    {
        en: 'Fill in',
        ru: 'Заполнить',
    },
    {
        en: 'Form',
        ru: 'Форма, формировать',
    },
    {
        en: 'Gap',
        ru: 'Пробел, пропуск',
    },
    {
        en: 'Half',
        ru: 'Половина',
    },
    {
        en: 'Heart',
        ru: 'Сердце',
    },
    {
        en: 'Inform',
        ru: 'Информировать, сообщить',
    },
    {
        en: 'Law',
        ru: 'Закон',
    },
    {
        en: 'Let',
        ru: 'Позволять',
    },
    {
        en: 'Miss',
        ru: 'Терять, скучать',
    },
    {
        en: 'Receive',
        ru: 'Получить',
    },
    {
        en: 'Reduce',
        ru: 'Уменьшить',
    },
    {
        en: 'Star',
        ru: 'Звезда',
    },
    {
        en: 'Urgent',
        ru: 'Срочный',
    },
    {
        en: 'Broaden',
        ru: 'Расширять',
    },
    {
        en: 'Care',
        ru: 'Волноваться, заботиться',
    },
    {
        en: 'Conversation',
        ru: 'Разговор',
    },
    {
        en: 'Discussion',
        ru: 'Обсуждение',
    },
    {
        en: 'Fun',
        ru: 'Веселье',
    },
    {
        en: 'Horizon',
        ru: 'Горизонт',
    },
    {
        en: 'Innocent',
        ru: 'Невинный',
    },
    {
        en: 'Luck',
        ru: 'Удача',
    },
    {
        en: 'Outdoors',
        ru: 'Вне дома',
    },
    {
        en: 'Partly',
        ru: 'Частично',
    },
    {
        en: 'Poverty',
        ru: 'Бедность',
    },
    {
        en: 'Private',
        ru: 'Частный',
    },
    {
        en: 'Pronunciation',
        ru: 'Произношение',
    },
    {
        en: 'Reach',
        ru: 'Достигать',
    },
    {
        en: 'Record',
        ru: 'Запись',
    },
    {
        en: 'Seldom',
        ru: 'Редко',
    },
    {
        en: 'Sight',
        ru: 'Зрение',
    },
    {
        en: 'Soft',
        ru: 'Мягкий',
    },
    {
        en: 'Suppose',
        ru: 'Предполагать',
    },
    {
        en: 'Thoroughly',
        ru: 'Тщательно',
    },
    {
        en: 'Touch',
        ru: 'Касаться, трогать',
    },
    {
        en: 'Wish',
        ru: 'Желание',
    },
    {
        en: 'Accept',
        ru: 'Принимать',
    },
    {
        en: 'Alarm clock',
        ru: 'Будильник',
    },
    {
        en: 'Certainly',
        ru: 'Конечно',
    },
    {
        en: 'Club',
        ru: 'Клуб',
    },
    {
        en: 'Divide',
        ru: 'Делить',
    },
    {
        en: 'Entrepreneur',
        ru: 'Предприниматель',
    },
    {
        en: 'Harmful',
        ru: 'Вредный',
    },
    {
        en: 'Importance',
        ru: 'Важность',
    },
    {
        en: 'Into',
        ru: 'В',
    },
    {
        en: 'Latest',
        ru: 'Последний',
    },
    {
        en: 'Loser',
        ru: 'Неудачник',
    },
    {
        en: 'Memory',
        ru: 'Память',
    },
    {
        en: 'Pain',
        ru: 'Боль',
    },
    {
        en: 'Part',
        ru: 'Часть',
    },
    {
        en: 'Polite',
        ru: 'Вежливый',
    },
    {
        en: 'Promising',
        ru: 'Многообещающий',
    },
    {
        en: 'Talent',
        ru: 'Талант',
    },
    {
        en: 'Usual',
        ru: 'Обычный',
    },
    {
        en: 'Able',
        ru: 'Мочь',
    },
    {
        en: 'Anniversary',
        ru: 'Годовщина',
    },
    {
        en: 'Cash',
        ru: 'Наличные',
    },
    {
        en: 'Concert',
        ru: 'Концерт',
    },
    {
        en: 'Discovery',
        ru: 'Открытие',
    },
    {
        en: 'Field',
        ru: 'Поле',
    },
    {
        en: 'Laptop',
        ru: 'Ноутбук',
    },
    {
        en: 'Maybe',
        ru: 'Возможно',
    },
    {
        en: 'Medicine',
        ru: 'Медицина',
    },
    {
        en: 'Recording',
        ru: 'Запись',
    },
    {
        en: 'Revolution',
        ru: 'Революция',
    },
    {
        en: 'Get rid of',
        ru: 'Избавиться от',
    },
    {
        en: 'Rise',
        ru: 'Подъем, поднимать',
    },
    {
        en: 'Silly',
        ru: 'Глупый',
    },
    {
        en: 'Stadium',
        ru: 'Стадион',
    },
    {
        en: 'Sun',
        ru: 'Солнце',
    },
    {
        en: 'Tablet',
        ru: 'Планшет, таблетка',
    },
    {
        en: 'Unforgettable',
        ru: 'Незабываемый',
    },
    {
        en: 'Go up',
        ru: 'Подниматься',
    },
    {
        en: 'Go down',
        ru: 'Снижаться',
    },
    {
        en: 'Up',
        ru: 'Вверх',
    },
    {
        en: 'Down',
        ru: 'Вниз',
    },
    {
        en: 'Conference',
        ru: 'Конференция',
    },
    {
        en: 'Conflict',
        ru: 'Конфликт',
    },
    {
        en: 'Contest',
        ru: 'Конкурс',
    },
    {
        en: 'Glad',
        ru: 'Рад',
    },
    {
        en: 'Guarantee',
        ru: 'Гарантия, гарантировать',
    },
    {
        en: 'Guess',
        ru: 'Догадаться',
    },
    {
        en: 'Initiative',
        ru: 'Инициатива',
    },
    {
        en: 'Participate',
        ru: 'Участвовать',
    },
    {
        en: 'Perhaps',
        ru: 'Возможно',
    },
    {
        en: 'React',
        ru: 'Реагировать',
    },
    {
        en: 'Resolve',
        ru: 'Разрешить',
    },
    {
        en: 'Sum',
        ru: 'Сумма',
    },
    {
        en: 'No one',
        ru: 'Ни один, никто',
    },
    {
        en: 'Contact',
        ru: 'Контакт, связываться',
    },
    {
        en: 'Attend',
        ru: 'Посещать',
    },
    {
        en: 'Extra',
        ru: 'Дополнительный',
    },
    {
        en: 'Additional',
        ru: 'Дополнительный',
    },
    {
        en: 'Bargain',
        ru: 'Сделка',
    },
    {
        en: 'Complete',
        ru: 'Полный, завершать',
    },
    {
        en: 'Plane',
        ru: 'Самолет',
    },
    {
        en: 'Foot',
        ru: 'Нога',
    },
    {
        en: 'Intensive',
        ru: 'Интенсивный',
    },
    {
        en: 'Page',
        ru: 'Страница',
    },
    {
        en: 'Shape',
        ru: 'Форма',
    },
    {
        en: 'Fit',
        ru: 'Подходить',
    },
    {
        en: 'Train',
        ru: 'Поезд',
    },
    {
        en: 'Case',
        ru: 'Случай',
    },
    {
        en: 'Confirm',
        ru: 'Подтверждать',
    },
    {
        en: 'Date',
        ru: 'Дата',
    },
    {
        en: 'Divorced',
        ru: 'Разведенный',
    },
    {
        en: 'Increase',
        ru: 'Увеличение, увеличить',
    },
    {
        en: 'Uncomfortable',
        ru: 'Неудобный',
    },
    {
        en: 'Brown',
        ru: 'Коричневый',
    },
    {
        en: 'Citizen',
        ru: 'Гражданин',
    },
    {
        en: 'Coin',
        ru: 'Монета',
    },
    {
        en: 'Collect',
        ru: 'Собирать',
    },
    {
        en: 'Cottage',
        ru: 'Коттедж',
    },
    {
        en: 'Foreigner',
        ru: 'Иностранец',
    },
    {
        en: 'Fully',
        ru: 'Полностью',
    },
    {
        en: 'Impress',
        ru: 'Впечатлять',
    },
    {
        en: 'Lucky',
        ru: 'Удачливый',
    },
    {
        en: 'Manage',
        ru: 'Управлять, суметь',
    },
    {
        en: 'Measure',
        ru: 'Мера, измерять',
    },
    {
        en: 'Protest',
        ru: 'Протестовать',
    },
    {
        en: 'Require',
        ru: 'Требовать',
    },
    {
        en: 'Rest',
        ru: 'Отдых',
    },
    {
        en: 'Satisfied',
        ru: 'Удовлетворенный',
    },
    {
        en: 'True',
        ru: 'Верный, истинный',
    },
    {
        en: 'Unpleasant',
        ru: 'Неприятный',
    },
    {
        en: 'Wise',
        ru: 'Мудрый',
    },
    {
        en: 'Clear',
        ru: 'Ясный',
    },
    {
        en: 'Colourful',
        ru: 'Красочный',
    },
    {
        en: 'Illustration',
        ru: 'Иллюстрация',
    },
    {
        en: 'Light',
        ru: 'Свет, светлый',
    },
    {
        en: 'Predictable',
        ru: 'Предсказуемый',
    },
    {
        en: 'Presentation',
        ru: 'Презентация',
    },
    {
        en: 'Rice',
        ru: 'Рис',
    },
    {
        en: 'Station',
        ru: 'Станция',
    },
    {
        en: 'Style',
        ru: 'Стиль',
    },
    {
        en: 'Tiring',
        ru: 'Утомительный',
    },
    {
        en: 'Translate',
        ru: 'Перевести',
    },
    {
        en: 'Translation',
        ru: 'Перевод',
    },
    {
        en: 'Virus',
        ru: 'Вирус',
    },
    {
        en: 'In advance',
        ru: 'Заранее',
    },
    {
        en: 'Born',
        ru: 'Рожден',
    },
    {
        en: 'Cancel',
        ru: 'Отменить',
    },
    {
        en: 'Flight',
        ru: 'Рейс, полет',
    },
    {
        en: 'Housework',
        ru: 'Домашняя работа, работа по дому',
    },
    {
        en: 'Ideal',
        ru: 'Идеальный',
    },
    {
        en: 'Install',
        ru: 'Устанавливать',
    },
    {
        en: 'Notice',
        ru: 'Уведомлять',
    },
    {
        en: 'Reserve',
        ru: 'Резервировать',
    },
    {
        en: 'Seat',
        ru: 'Место, сиденье',
    },
    {
        en: 'Disappear',
        ru: 'Исчезать',
    },
    {
        en: 'Enter',
        ru: 'Войти, поступить',
    },
    {
        en: 'New Year',
        ru: 'Новый год',
    },
    {
        en: 'Operation',
        ru: 'Операция',
    },
    {
        en: 'Vacation',
        ru: 'Отпуск',
    },
    {
        en: 'Badly',
        ru: 'Плохо',
    },
    {
        en: 'Luckily',
        ru: 'К счастью',
    },
    {
        en: 'Ninety',
        ru: 'Девяносто',
    },
    {
        en: 'Repair',
        ru: 'Ремонтировать',
    },
    {
        en: 'Ridiculous',
        ru: 'Смехотворный',
    },
    {
        en: 'Splendid',
        ru: 'Великолепный, роскошный',
    },
    {
        en: 'Save up',
        ru: 'Копить',
    },
    {
        en: 'Suit',
        ru: 'Подходить',
    },
    {
        en: 'Book',
        ru: 'Бронировать',
    },
    {
        en: 'Ability',
        ru: 'Способность',
    },
    {
        en: 'Advise',
        ru: 'Советовать',
    },
    {
        en: 'Album',
        ru: 'Альбом',
    },
    {
        en: 'Although',
        ru: 'Хотя',
    },
    {
        en: 'Analytical',
        ru: 'Аналитический',
    },
    {
        en: 'Chapter',
        ru: 'Глава',
    },
    {
        en: 'Majority',
        ru: 'Большинство',
    },
    {
        en: 'Midnight',
        ru: 'Полночь',
    },
    {
        en: 'Paint',
        ru: 'Покрасить',
    },
    {
        en: 'Recovery',
        ru: 'Восстановление',
    },
    {
        en: 'Release',
        ru: 'Выпускать, релиз',
    },
    {
        en: 'Rude',
        ru: 'Грубый',
    },
    {
        en: 'Rudely',
        ru: 'Грубо',
    },
    {
        en: 'Speedy',
        ru: 'Быстрый',
    },
    {
        en: 'Subtitle',
        ru: 'Подзаголовок',
    },
    {
        en: 'Type',
        ru: 'Печатать, тип',
    },
    {
        en: 'War',
        ru: 'Война',
    },
    {
        en: 'Attack',
        ru: 'Атака, атаковать',
    },
    {
        en: 'The authorities',
        ru: 'Власть',
    },
    {
        en: 'Cheek',
        ru: 'Щека',
    },
    {
        en: 'During',
        ru: 'В течение, во время',
    },
    {
        en: 'Enemy',
        ru: 'Враг',
    },
    {
        en: 'Farm',
        ru: 'Ферма',
    },
    {
        en: 'A few',
        ru: 'Несколько',
    },
    {
        en: 'Fortunately',
        ru: 'К счастью',
    },
    {
        en: 'Lip',
        ru: 'Губа',
    },
    {
        en: 'Look up',
        ru: 'Посмотреть',
    },
    {
        en: 'Map',
        ru: 'Карта',
    },
    {
        en: 'Mirror',
        ru: 'Зеркало',
    },
    {
        en: 'Peacefully',
        ru: 'Мирно',
    },
    {
        en: 'Someone',
        ru: 'Кто-то',
    },
    {
        en: 'Successfully',
        ru: 'Успешно',
    },
    {
        en: 'Tour',
        ru: 'Тур',
    },
    {
        en: 'Thought',
        ru: 'Мысль',
    },
    {
        en: 'Analyse',
        ru: 'Анализировать',
    },
    {
        en: 'Automatically',
        ru: 'Автоматически',
    },
    {
        en: 'Customer',
        ru: 'Покупатель, клиент',
    },
    {
        en: 'Emotion',
        ru: 'Эмоция',
    },
    {
        en: 'Gate',
        ru: 'Ворота',
    },
    {
        en: 'Highest',
        ru: 'Высший',
    },
    {
        en: 'Instruction',
        ru: 'Инструкция',
    },
    {
        en: 'Lid',
        ru: 'Крышка',
    },
    {
        en: 'Midday',
        ru: 'Полдень',
    },
    {
        en: 'Neighbour',
        ru: 'Сосед',
    },
    {
        en: 'Noise',
        ru: 'Шум',
    },
    {
        en: 'Noon',
        ru: 'Полдень',
    },
    {
        en: 'Stone',
        ru: 'Камень',
    },
    {
        en: 'Lie',
        ru: 'Ложь, врать',
    },
    {
        en: 'Agreement',
        ru: 'Соглашение',
    },
    {
        en: 'Appearance',
        ru: 'Внешность, появляться',
    },
    {
        en: 'Concentrate',
        ru: 'Сконцентрироваться',
    },
    {
        en: 'Describe',
        ru: 'Описывать',
    },
    {
        en: 'Destroy',
        ru: 'Разрушить',
    },
    {
        en: 'Hurry up',
        ru: 'Торопиться',
    },
    {
        en: 'Invitation',
        ru: 'Приглашение',
    },
    {
        en: 'Loss',
        ru: 'Потеря',
    },
    {
        en: 'Radio',
        ru: 'Радио',
    },
    {
        en: 'Unprofessionally',
        ru: 'Непрофессионально',
    },
    {
        en: 'Ball',
        ru: 'Мяч',
    },
    {
        en: 'Blow',
        ru: 'Дуть',
    },
    {
        en: 'Catch',
        ru: 'Поймать',
    },
    {
        en: 'Cave',
        ru: 'Пещера',
    },
    {
        en: 'Grow up',
        ru: 'Вырасти',
    },
    {
        en: 'Hide',
        ru: 'Прятать',
    },
    {
        en: 'Hit',
        ru: 'Ударить, удар',
    },
    {
        en: 'At once',
        ru: 'Сразу',
    },
    {
        en: 'Otherwise',
        ru: 'Иначе, по-другому',
    },
    {
        en: 'Overcome',
        ru: 'Преодолеть',
    },
    {
        en: 'Shelf',
        ru: 'Полка',
    },
    {
        en: 'Sportsman',
        ru: 'Спортсмен',
    },
    {
        en: 'Steal',
        ru: 'Украсть',
    },
    {
        en: 'Sudden',
        ru: 'Внезапный',
    },
    {
        en: 'Treasure',
        ru: 'Сокровище',
    },
    {
        en: 'Wind',
        ru: 'Ветер',
    },
    {
        en: 'Withdraw',
        ru: 'Снимать',
    },
    {
        en: 'Accidentally',
        ru: 'Случайно',
    },
    {
        en: 'Across',
        ru: 'Через',
    },
    {
        en: 'Arm',
        ru: 'Рука',
    },
    {
        en: 'Beside',
        ru: 'Рядом, возле',
    },
    {
        en: 'Bravely',
        ru: 'Смело',
    },
    {
        en: 'Courageously',
        ru: 'Отвежно',
    },
    {
        en: 'Deal',
        ru: 'Сделка, иметь дело',
    },
    {
        en: 'Fight',
        ru: 'Борьба, бороться',
    },
    {
        en: 'Forgive',
        ru: 'Прощать',
    },
    {
        en: 'Freedom',
        ru: 'Свобода',
    },
    {
        en: 'Heroically',
        ru: 'Героически',
    },
    {
        en: 'Hurt',
        ru: 'Ранить, повредить',
    },
    {
        en: 'Independence',
        ru: 'Независимость',
    },
    {
        en: 'Knee',
        ru: 'Колено',
    },
    {
        en: 'Leg',
        ru: 'Нога',
    },
    {
        en: 'Masterpiece',
        ru: 'Шедевр',
    },
    {
        en: 'Piece',
        ru: 'Кусок',
    },
    {
        en: 'Plate',
        ru: 'Тарелка',
    },
    {
        en: 'Pond',
        ru: 'Пруд',
    },
    {
        en: 'Pony',
        ru: 'Пони',
    },
    {
        en: 'Soldier',
        ru: 'Солдат',
    },
    {
        en: 'Supplier',
        ru: 'Поставщик',
    },
    {
        en: 'Beat',
        ru: 'Бить',
    },
    {
        en: 'Bell',
        ru: 'Звонок',
    },
    {
        en: 'Concentration',
        ru: 'Концентрация',
    },
    {
        en: 'Incredibly',
        ru: 'Невероятно',
    },
    {
        en: 'Palace',
        ru: 'Дворец',
    },
    {
        en: 'Patience',
        ru: 'Терпение',
    },
    {
        en: 'Purse',
        ru: 'Кошелек',
    },
    {
        en: 'Television',
        ru: 'Телевидение',
    },
    {
        en: 'Uniform',
        ru: 'Форма',
    },
    {
        en: 'Carton',
        ru: 'Пакет, картон',
    },
    {
        en: 'Dark',
        ru: 'Темный, темно',
    },
    {
        en: 'List',
        ru: 'Список',
    },
    {
        en: 'Login',
        ru: 'Логин',
    },
    {
        en: 'May',
        ru: 'Возможно',
    },
    {
        en: 'Network',
        ru: 'Сеть',
    },
    {
        en: 'Password',
        ru: 'Пароль',
    },
    {
        en: 'Performance',
        ru: 'Представление',
    },
    {
        en: 'Somehow',
        ru: 'Как-то',
    },
    {
        en: 'Unexpectedly',
        ru: 'Неожиданно',
    },
    {
        en: 'Second',
        ru: 'Секунда',
    },
    {
        en: 'Complaint',
        ru: 'Жалоба',
    },
    {
        en: 'Dislike',
        ru: 'Дизлайк, не нравится',
    },
    {
        en: 'Format',
        ru: 'Формат',
    },
    {
        en: 'Bestseller',
        ru: 'Бестселлер',
    },
    {
        en: 'Export',
        ru: 'Экспорт, экспортировать',
    },
    {
        en: 'Fame',
        ru: 'Слава',
    },
    {
        en: 'Fear',
        ru: 'Страх',
    },
    {
        en: 'Figure',
        ru: 'цифра, фигура',
    },
    {
        en: 'Finally',
        ru: 'В конце концов',
    },
    {
        en: 'Fortune',
        ru: 'Состояние',
    },
    {
        en: 'High-quality',
        ru: 'Высококачественный',
    },
    {
        en: 'Introduce',
        ru: 'Представлять',
    },
    {
        en: 'Low-quality',
        ru: 'Низкокачественный',
    },
    {
        en: 'Mention',
        ru: 'Упоминать',
    },
    {
        en: 'Might',
        ru: 'Возможно',
    },
    {
        en: 'Recognition',
        ru: 'Признание',
    },
    {
        en: 'Army',
        ru: 'Армия',
    },
    {
        en: 'Government',
        ru: 'Правительство',
    },
    {
        en: 'Nearest',
        ru: 'Ближайший',
    },
    {
        en: 'Territory',
        ru: 'Территория',
    },
    {
        en: 'Coat',
        ru: 'Пальто',
    },
    {
        en: 'Curtains',
        ru: 'Шторы',
    },
    {
        en: 'Hook',
        ru: 'Крючок',
    },
    {
        en: 'Machine',
        ru: 'Машина',
    },
    {
        en: 'Painting',
        ru: 'Картина',
    },
    {
        en: 'Pillow',
        ru: 'Подушка',
    },
    {
        en: 'Truth',
        ru: 'Правда',
    },
    {
        en: 'Test',
        ru: 'Тестировать',
    },
    {
        en: 'Arrest',
        ru: 'Арестовывать, арест',
    },
    {
        en: 'Atmosphere',
        ru: 'Атмосфера',
    },
    {
        en: 'Create',
        ru: 'Создать',
    },
    {
        en: 'Criticize',
        ru: 'Критиковать',
    },
    {
        en: 'Elephant',
        ru: 'Слон',
    },
    {
        en: 'Impolitely',
        ru: 'Невежливо',
    },
    {
        en: 'Reason',
        ru: 'Причина',
    },
    {
        en: 'Remark',
        ru: 'Замечание',
    },
    {
        en: 'Sort',
        ru: 'Род, сорт',
    },
    {
        en: 'Awful',
        ru: 'Ужасный',
    },
    {
        en: 'Celebrity',
        ru: 'Знаменитость',
    },
    {
        en: 'Copybook',
        ru: 'Тетрадь',
    },
    {
        en: 'Definitely',
        ru: 'Определенно',
    },
    {
        en: 'Diet',
        ru: 'Диета',
    },
    {
        en: 'Human',
        ru: 'Человеческий, человек',
    },
    {
        en: 'Justice',
        ru: 'Справедливость',
    },
    {
        en: 'Line',
        ru: 'Линия',
    },
    {
        en: 'Medical',
        ru: 'Медицинский',
    },
    {
        en: 'Pool',
        ru: 'Бассейн',
    },
    {
        en: 'Reaction',
        ru: 'Реакция',
    },
    {
        en: 'Alive',
        ru: 'Живой, жив',
    },
    {
        en: 'Ancient',
        ru: 'Древний',
    },
    {
        en: 'Constant',
        ru: 'Постоянный',
    },
    {
        en: 'Fifteenth',
        ru: 'Пятнадцать',
    },
    {
        en: 'Instead',
        ru: 'Вместо',
    },
    {
        en: 'Issue',
        ru: 'Вопрос',
    },
    {
        en: 'Monastery',
        ru: 'монастырь',
    },
    {
        en: 'Stamp',
        ru: 'печать, марка',
    },
    {
        en: 'Still',
        ru: 'Всё ещё',
    },
    {
        en: 'Point out',
        ru: 'Заметить',
    },
    {
        en: 'Addicted',
        ru: 'Зависим',
    },
    {
        en: 'Darkness',
        ru: 'Темнота',
    },
    {
        en: 'Drugs',
        ru: 'Наркотики',
    },
    {
        en: 'Fed up',
        ru: 'Сыт по горло',
    },
    {
        en: 'Gambling',
        ru: 'Азартные игры',
    },
    {
        en: 'Ghost',
        ru: 'Призрак',
    },
    {
        en: 'Heavily',
        ru: 'Сильно',
    },
    {
        en: 'Nice',
        ru: 'Мило',
    },
    {
        en: 'Optimism',
        ru: 'Оптимизм',
    },
    {
        en: 'Pity',
        ru: 'Жаль',
    },
    {
        en: 'Ruin',
        ru: 'Разрушать',
    },
    {
        en: 'Spider',
        ru: 'Паук',
    },
    {
        en: 'Vacancy',
        ru: 'Вакансия',
    },
    {
        en: 'Baseball',
        ru: 'Бейсбол',
    },
    {
        en: 'Bitterly',
        ru: 'Горько',
    },
    {
        en: 'Castle',
        ru: 'Замок',
    },
    {
        en: 'Death',
        ru: 'Смерть',
    },
    {
        en: 'Differ',
        ru: 'Отличаться',
    },
    {
        en: 'Excited',
        ru: 'В восторге',
    },
    {
        en: 'Generation',
        ru: 'Поколение',
    },
    {
        en: 'Mess',
        ru: 'Беспорядок',
    },
    {
        en: 'Nightclub',
        ru: 'Ночной клуб',
    },
    {
        en: 'Nightlife',
        ru: 'Ночная жизнь',
    },
    {
        en: 'Numerous',
        ru: 'Многочисленный',
    },
    {
        en: 'Obviously',
        ru: 'Очевидно',
    },
    {
        en: 'Purchase',
        ru: 'Покупка, покупать',
    },
    {
        en: 'Sky',
        ru: 'Небо',
    },
    {
        en: 'Skyscraper',
        ru: 'Небоскреб',
    },
    {
        en: 'Accuse',
        ru: 'Обвинять',
    },
    {
        en: 'Crime',
        ru: 'Преступление',
    },
    {
        en: 'Forward',
        ru: 'Вперед',
    },
    {
        en: 'Impatience',
        ru: 'Нетерпение',
    },
    {
        en: 'insist',
        ru: 'Настоять',
    },
    {
        en: 'Murder',
        ru: 'Убийство',
    },
    {
        en: 'Rely',
        ru: 'Полагаться',
    },
    {
        en: 'Reply',
        ru: 'Ответить',
    },
    {
        en: 'Robbery',
        ru: 'Ограбление',
    },
    {
        en: 'Shout',
        ru: 'Кричать',
    },
    {
        en: 'Subscribe',
        ru: 'Подписываться',
    },
    {
        en: 'Unacceptable',
        ru: 'Неприемлемый',
    },
    {
        en: 'Look for',
        ru: 'Искать',
    },
    {
        en: 'Approve',
        ru: 'Одобрить',
    },
    {
        en: 'Backache',
        ru: 'Боль в спине',
    },
    {
        en: 'Candidate',
        ru: 'Кандидат',
    },
    {
        en: 'Congratulate',
        ru: 'Подздравлять',
    },
    {
        en: 'Consist',
        ru: 'Состоять',
    },
    {
        en: 'Escape',
        ru: 'Сбежать',
    },
    {
        en: 'Headache',
        ru: 'Головная боль',
    },
    {
        en: 'Remind',
        ru: 'Напиминать',
    },
    {
        en: 'Report',
        ru: 'Отчет',
    },
    {
        en: 'Succeed',
        ru: 'Преуспеть, удаваться',
    },
    {
        en: 'Vote',
        ru: 'Голосовать',
    },
    {
        en: 'Addiction',
        ru: 'Зависимость',
    },
    {
        en: 'Advantage',
        ru: 'Преимущество',
    },
    {
        en: 'Associate',
        ru: 'Ассоциировать',
    },
    {
        en: 'Attitude',
        ru: 'Отношение',
    },
    {
        en: 'Blackboard',
        ru: 'Классная доска',
    },
    {
        en: 'Cancer',
        ru: 'Рак',
    },
    {
        en: 'Cause',
        ru: 'Причина, вызывать',
    },
    {
        en: 'Cheating',
        ru: 'Мошенничество, списывать',
    },
    {
        en: 'Cure',
        ru: 'Лечение, лечить',
    },
    {
        en: 'Disadvantage',
        ru: 'Недостаток',
    },
    {
        en: 'Discipline',
        ru: 'Дисциплина',
    },
    {
        en: 'Disease',
        ru: 'Болезнь',
    },
    {
        en: 'Forever',
        ru: 'Навсегда',
    },
    {
        en: 'Lack',
        ru: 'Нехватка, не хватать',
    },
    {
        en: 'Linguistics',
        ru: 'Лингвистика',
    },
    {
        en: 'Lung',
        ru: 'Легкое',
    },
    {
        en: 'Negative',
        ru: 'Отрицательный',
    },
    {
        en: 'Refusal',
        ru: 'Отказ',
    },
    {
        en: 'Search',
        ru: 'Поиск, искать',
    },
    {
        en: 'Specialise',
        ru: 'Специализироваться',
    },
    {
        en: 'Temporary',
        ru: 'Временный',
    },
    {
        en: 'Whiteboard',
        ru: 'Доска',
    },
    {
        en: 'Bar',
        ru: 'Бар',
    },
    {
        en: 'Bottom',
        ru: 'Низ',
    },
    {
        en: 'Cathedral',
        ru: 'Собор',
    },
    {
        en: 'Danger',
        ru: 'Опасность',
    },
    {
        en: 'East',
        ru: 'Восток',
    },
    {
        en: 'General',
        ru: 'Общий',
    },
    {
        en: 'North',
        ru: 'Север',
    },
    {
        en: 'Rate',
        ru: 'Ставка',
    },
    {
        en: 'Satisfactory',
        ru: 'Удовлетворительный',
    },
    {
        en: 'South',
        ru: 'Юг',
    },
    {
        en: 'Strict',
        ru: 'Строгий',
    },
    {
        en: 'Welcome',
        ru: 'Добро пожаловать',
    },
    {
        en: 'West',
        ru: 'Запад',
    },
    {
        en: 'Whole',
        ru: 'Весь, целый',
    },
    {
        en: 'April',
        ru: 'Апрель',
    },
    {
        en: 'August',
        ru: 'Август',
    },
    {
        en: 'Christmas',
        ru: 'Рождество',
    },
    {
        en: 'December',
        ru: 'Декабрь',
    },
    {
        en: 'February',
        ru: 'Февраль',
    },
    {
        en: 'January',
        ru: 'Январь',
    },
    {
        en: 'July',
        ru: 'Июль',
    },
    {
        en: 'June',
        ru: 'Июнь',
    },
    {
        en: 'March',
        ru: 'Март',
    },
    {
        en: 'Mexico',
        ru: 'Мексика',
    },
    {
        en: 'Middle',
        ru: 'Середина',
    },
    {
        en: 'November',
        ru: 'Ноябрь',
    },
    {
        en: 'October',
        ru: 'Октябрь',
    },
    {
        en: 'September',
        ru: 'Сентябрь',
    },
    {
        en: 'Till',
        ru: 'До',
    },
    {
        en: 'Until',
        ru: 'До',
    },
    {
        en: 'May',
        ru: 'Май',
    },
    {
        en: 'Market',
        ru: 'Рынок',
    },
    {
        en: 'Remote control',
        ru: 'Пульт дистанционного управления',
    },
    {
        en: 'Six',
        ru: 'Шесть',
    },
    {
        en: 'Somewhere',
        ru: 'Где-то',
    },
    {
        en: 'Eleven',
        ru: 'Одиннадцать',
    },
    {
        en: 'Hat',
        ru: 'Шляпа',
    },
    {
        en: 'Hold',
        ru: 'Держать',
    },
    {
        en: 'Log in',
        ru: 'Войти в систему',
    },
    {
        en: 'Log out',
        ru: 'Выйти из системы',
    },
    {
        en: 'Marriage',
        ru: 'Брак',
    },
    {
        en: 'T-shirt',
        ru: 'Футболка',
    },
    {
        en: 'Biology',
        ru: 'Биология',
    },
    {
        en: 'Brightly',
        ru: 'Ярко',
    },
    {
        en: 'Chat',
        ru: 'Чат',
    },
    {
        en: 'Cheer',
        ru: 'Ободрить',
    },
    {
        en: 'Hamburger',
        ru: '',
    },
    {
        en: 'Polluted',
        ru: 'Загрязненный',
    },
    {
        en: 'Rain',
        ru: 'Дождь, идет дождь',
    },
    {
        en: 'Shine',
        ru: 'Светить',
    },
    {
        en: 'Shower',
        ru: 'Душ',
    },
    {
        en: 'Snow',
        ru: 'Снег, идет снег',
    },
    {
        en: 'Bake',
        ru: 'Выпекать',
    },
    {
        en: 'Bark',
        ru: 'Лаять',
    },
    {
        en: 'Bread',
        ru: 'Хлеб',
    },
    {
        en: 'Directly',
        ru: 'Прямо, напрямую',
    },
    {
        en: 'Sausage',
        ru: 'Колбаса, сосиска',
    },
    {
        en: 'Stool',
        ru: 'Стул',
    },
    {
        en: 'Tie',
        ru: 'Галстук',
    },
    {
        en: 'Airplane',
        ru: 'Самолет',
    },
    {
        en: 'Algebra',
        ru: 'Алгебра',
    },
    {
        en: 'Bath',
        ru: 'Ванна',
    },
    {
        en: 'Cookie',
        ru: 'Печенье',
    },
    {
        en: 'Doll',
        ru: 'Кукла',
    },
    {
        en: 'Fix',
        ru: 'Чинить',
    },
    {
        en: 'Geometry',
        ru: 'Геометрия',
    },
    {
        en: 'Land',
        ru: 'Земля',
    },
    {
        en: 'Stranger',
        ru: 'Незнакомец',
    },
    {
        en: 'Take off',
        ru: 'Взлетать',
    },
    {
        en: 'Watch',
        ru: 'Часы',
    },
    {
        en: 'Boil',
        ru: 'Кипеть',
    },
    {
        en: 'Brush',
        ru: 'Чистить',
    },
    {
        en: 'Comics',
        ru: 'Комиксы',
    },
    {
        en: 'Dad',
        ru: 'Папа',
    },
    {
        en: 'Degree',
        ru: 'Степень',
    },
    {
        en: 'Disturb',
        ru: 'Беспокоить',
    },
    {
        en: 'Grandpa',
        ru: 'Дедушка',
    },
    {
        en: 'Kettle',
        ru: 'Чайник',
    },
    {
        en: 'Knock',
        ru: 'Стучать',
    },
    {
        en: 'Mom',
        ru: 'Мама',
    },
    {
        en: 'Pack',
        ru: 'Паковать',
    },
    {
        en: 'Pray',
        ru: 'Молиться',
    },
    {
        en: 'Teeth',
        ru: 'Зубы',
    },
    {
        en: 'Through',
        ru: 'Через',
    },
    {
        en: 'Twins',
        ru: 'Близнецы',
    },
    {
        en: 'Underground',
        ru: 'Метро',
    },
    {
        en: 'Slow down',
        ru: 'Замедлить',
    },
    {
        en: 'Cope',
        ru: 'Справляться',
    },
    {
        en: 'Deserve',
        ru: 'Заслуживать',
    },
    {
        en: 'Exchange',
        ru: 'Обменивать',
    },
    {
        en: 'Firmly',
        ru: 'Твердо',
    },
    {
        en: 'Loud',
        ru: 'Громкий',
    },
    {
        en: 'Owe',
        ru: 'Быть должным',
    },
    {
        en: 'Sharply',
        ru: 'Резко',
    },
    {
        en: 'Soup',
        ru: 'Суп',
    },
    {
        en: 'Split Up',
        ru: 'Расстаться',
    },
    {
        en: 'Suspicious',
        ru: 'Подозрительный',
    },
    {
        en: 'Thrilling',
        ru: 'Захватывающий',
    },
    {
        en: 'Ache',
        ru: 'Боль',
    },
    {
        en: 'Ankle',
        ru: 'Лодыжка',
    },
    {
        en: 'Argue',
        ru: 'Спорить',
    },
    {
        en: 'Asleep',
        ru: 'Спящий',
    },
    {
        en: 'Bird',
        ru: 'Птица',
    },
    {
        en: 'Retell',
        ru: 'Пересказывать',
    },
    {
        en: 'Rollerblading',
        ru: 'Кататься на роликах',
    },
    {
        en: 'Skateboarding',
        ru: 'Скейтбординг',
    },
    {
        en: 'Summary',
        ru: 'Резюме, краткое изложение',
    },
    {
        en: 'While',
        ru: 'В то время как',
    },
    {
        en: 'Already',
        ru: 'Уже',
    },
    {
        en: 'Childhood',
        ru: 'Детство',
    },
    {
        en: 'Diploma',
        ru: 'Диплом',
    },
    {
        en: 'English-speaking',
        ru: 'Англоговорящий',
    },
    {
        en: 'Ever',
        ru: 'Когда-либо',
    },
    {
        en: 'Injure',
        ru: 'Ранить, повредить',
    },
    {
        en: 'Iron',
        ru: 'Гладить',
    },
    {
        en: 'Local',
        ru: 'Местный',
    },
    {
        en: 'Recover',
        ru: 'Выздороветь',
    },
    {
        en: 'Since',
        ru: 'С, с тех пор как',
    },
    {
        en: 'Superstar',
        ru: 'Супер звезда',
    },
    {
        en: 'Yet',
        ru: 'Ещё',
    },
    {
        en: 'Film',
        ru: 'Фильм',
    },
    {
        en: 'Lottery',
        ru: 'Лотерея',
    },
    {
        en: 'Receptionist',
        ru: 'Секретарь',
    },
    {
        en: 'Staff',
        ru: 'Персонал',
    },
    {
        en: 'Sushi',
        ru: 'Суши',
    },
    {
        en: 'Asia',
        ru: 'Азия',
    },
    {
        en: 'Engaged',
        ru: 'Помолвлен',
    },
    {
        en: 'Europe',
        ru: 'Европа',
    },
    {
        en: 'Exhausted',
        ru: 'Истощен',
    },
    {
        en: 'Lately',
        ru: 'В последнее время',
    },
    {
        en: 'Library',
        ru: 'Библиотека',
    },
    {
        en: 'Religion',
        ru: 'Религия',
    },
    {
        en: 'Date',
        ru: 'Встречаться',
    },
    {
        en: 'Announce',
        ru: 'Объявлять',
    },
    {
        en: 'Boat',
        ru: 'Лодка',
    },
    {
        en: 'Camera',
        ru: 'Камера',
    },
    {
        en: 'Discount',
        ru: 'Скидка',
    },
    {
        en: 'Donate',
        ru: 'Жертвовать',
    },
    {
        en: 'Drown',
        ru: 'Тонунь',
    },
    {
        en: 'Latin America',
        ru: 'Латинская Америка',
    },
    {
        en: 'Nine',
        ru: 'Девять',
    },
    {
        en: 'Passport',
        ru: 'Паспорт',
    },
    {
        en: 'Payment',
        ru: 'Платеж',
    },
    {
        en: 'Preparation',
        ru: 'Подготовка',
    },
    {
        en: 'Recently',
        ru: 'Недавно',
    },
    {
        en: 'Red',
        ru: 'Красный',
    },
    {
        en: 'Ship',
        ru: 'Корабль',
    },
    {
        en: 'Stupidly',
        ru: 'Тупо',
    },
    {
        en: 'Sink',
        ru: 'Тонуть, раковина',
    },
    {
        en: 'Upload',
        ru: 'Загружать',
    },
    {
        en: 'Weight',
        ru: 'Вес',
    },
    {
        en: 'White',
        ru: 'Белый',
    },
    {
        en: 'Yellow',
        ru: 'Желтый',
    },
    {
        en: 'Apply',
        ru: 'Подять заявку',
    },
    {
        en: 'Briefly',
        ru: 'Кратко',
    },
    {
        en: 'Capital',
        ru: 'Столица, капитал',
    },
    {
        en: 'Click',
        ru: 'Нажать',
    },
    {
        en: 'Confirmation',
        ru: 'Подтверждение',
    },
    {
        en: 'Feedback',
        ru: 'Обратная связь',
    },
    {
        en: 'Forecast',
        ru: 'Прогноз',
    },
    {
        en: 'Petrol station',
        ru: 'Автозаправка',
    },
    {
        en: 'Publish',
        ru: 'Публиковать',
    },
    {
        en: 'Response',
        ru: 'Ответ',
    },
    {
        en: 'Top',
        ru: 'Верхний',
    },
    {
        en: 'Volume',
        ru: 'Громкость',
    },
    {
        en: 'Webinar',
        ru: 'Вебинар',
    },
    {
        en: 'Barbecue',
        ru: 'Барбекю',
    },
    {
        en: 'Insurance',
        ru: 'Страхование',
    },
    {
        en: 'Nobody',
        ru: 'Никто',
    },
    {
        en: 'Pleased',
        ru: 'Довольный',
    },
    {
        en: 'Print',
        ru: 'Печать',
    },
    {
        en: 'Soaked',
        ru: 'Промокший',
    },
    {
        en: 'Switch off',
        ru: 'Выключать',
    },
    {
        en: 'Unless',
        ru: 'Если не',
    },
    {
        en: 'Turn off',
        ru: 'Выключать',
    },
    {
        en: 'Damage',
        ru: 'Разрушать',
    },
    {
        en: 'Delay',
        ru: 'Задержка, задержаться',
    },
    {
        en: 'Fewer',
        ru: 'Меньше',
    },
    {
        en: 'Grammatically',
        ru: 'Грамматически',
    },
    {
        en: 'Hire',
        ru: 'Нанимать',
    },
    {
        en: 'Incorrectly',
        ru: 'Неверно',
    },
    {
        en: 'Jewellery',
        ru: 'Ювелирные украшения',
    },
    {
        en: 'Photograph',
        ru: 'Фотография',
    },
    {
        en: 'Plant',
        ru: 'Растение',
    },
    {
        en: 'Properly',
        ru: 'Должным образом',
    },
    {
        en: 'Punish',
        ru: 'Наказать',
    },
    {
        en: 'Robber',
        ru: 'Грабитель',
    },
    {
        en: 'Vase',
        ru: 'Ваза',
    },
    {
        en: 'Whereas',
        ru: 'В то время как',
    },
    {
        en: 'Bite',
        ru: 'Укусить',
    },
    {
        en: 'Closely',
        ru: 'Тесно',
    },
    {
        en: 'Connected',
        ru: 'Связанный',
    },
    {
        en: 'Ignore',
        ru: 'Игнорировать',
    },
    {
        en: 'Praise',
        ru: 'Хвалить, похвала',
    },
    {
        en: 'Treat',
        ru: 'Обращаться',
    },
    {
        en: 'Unfairly',
        ru: 'Несправедливо',
    },
    {
        en: 'Approval',
        ru: 'Одобрение',
    },
    {
        en: 'Bye',
        ru: 'Пока, до свидания',
    },
    {
        en: 'Goodbye',
        ru: 'До свидания',
    },
    {
        en: 'Hello',
        ru: 'Привет',
    },
    {
        en: 'Hi',
        ru: 'Привет',
    },
    {
        en: 'Blog',
        ru: 'Блог',
    },
    {
        en: 'Burn',
        ru: 'Жечь',
    },
    {
        en: 'Commit',
        ru: 'Совершить',
    },
    {
        en: 'Dessert',
        ru: 'Десерт',
    },
    {
        en: 'Fire',
        ru: 'Пожар, огонь',
    },
    {
        en: 'Host',
        ru: 'Хозяин',
    },
    {
        en: 'Menu',
        ru: 'Меню',
    },
    {
        en: 'No',
        ru: 'Нет',
    },
    {
        en: 'Salad',
        ru: 'Салат',
    },
    {
        en: 'Salty',
        ru: 'Соленый',
    },
    {
        en: 'Yes',
        ru: 'Да',
    },
    {
        en: 'Beforehand',
        ru: 'Заранее',
    },
    {
        en: 'Faint',
        ru: 'Падать в обморок',
    },
    {
        en: 'Motorcycle',
        ru: 'Мотоцикл',
    },
    {
        en: 'Quit',
        ru: 'Уволиться, бросать',
    },
    {
        en: 'Register',
        ru: 'Зарегистрироваться',
    },
    {
        en: 'Scholarship',
        ru: 'Стипендия',
    },
    {
        en: 'Umbrella',
        ru: 'Зонт',
    },
    {
        en: 'Waiter',
        ru: 'Официант',
    },
    {
        en: 'Waitress',
        ru: 'Официантка',
    },
    {
        en: 'Wedding',
        ru: 'Свадьба',
    },
    {
        en: 'Give up',
        ru: 'Бросать',
    },
    {
        en: 'Basis',
        ru: 'Основа',
    },
    {
        en: 'Climb',
        ru: 'Взобраться',
    },
    {
        en: 'Decrease',
        ru: 'Снижение, снижаться',
    },
    {
        en: 'Delete',
        ru: 'Удалить',
    },
    {
        en: 'Kick',
        ru: 'Удар, ударить ногой',
    },
    {
        en: 'Ladder',
        ru: 'Лестница',
    },
    {
        en: 'Multiply',
        ru: 'Умножить',
    },
    {
        en: 'Unnecessary',
        ru: 'Ненужный',
    },
    {
        en: 'Attentively',
        ru: 'Внимательно',
    },
    {
        en: 'Earthquake',
        ru: 'Землетрясение',
    },
    {
        en: 'Growth',
        ru: 'Рост',
    },
    {
        en: 'Hurricane',
        ru: 'Ураган',
    },
    {
        en: 'Invent',
        ru: 'Изобретать',
    },
    {
        en: 'Protection',
        ru: 'Защита',
    },
    {
        en: 'Push',
        ru: 'Толкать',
    },
    {
        en: 'Stimulate',
        ru: 'Стимулировать',
    },
    {
        en: 'Subtract',
        ru: 'Вычитать',
    },
    {
        en: 'Catalogue',
        ru: 'Каталог',
    },
    {
        en: 'Circumstance',
        ru: 'Обстоятельство',
    },
    {
        en: 'Hug',
        ru: 'Обнимать',
    },
    {
        en: 'Possibility',
        ru: 'Возможность',
    },
    {
        en: 'Stairs',
        ru: 'Лестница',
    },
    {
        en: 'Suggest',
        ru: 'Предлагать',
    },
    {
        en: 'Tightly',
        ru: 'Крепко',
    },
    {
        en: 'Shut up',
        ru: 'Заткнуться',
    },
    {
        en: 'Allow',
        ru: 'Позволять',
    },
    {
        en: 'Data',
        ru: 'Данные',
    },
    {
        en: 'Organize',
        ru: 'Организовать',
    },
    {
        en: 'Redo',
        ru: 'Переделать',
    },
    {
        en: 'Shut',
        ru: 'Закрывать',
    },
    {
        en: 'Trust',
        ru: 'Доверять',
    },
    {
        en: 'Kid',
        ru: 'Шутить',
    },
    {
        en: 'Turn',
        ru: 'Черёд',
    },
    {
        en: 'Set up',
        ru: 'Создать',
    },
    {
        en: 'Admire',
        ru: 'Восхищаться',
    },
    {
        en: 'Bonus',
        ru: 'Бонус',
    },
    {
        en: 'Doubt',
        ru: 'Сомнение, сомневаться',
    },
    {
        en: 'Friendship',
        ru: 'Дружба',
    },
    {
        en: 'Immorally',
        ru: 'Аморально',
    },
    {
        en: 'Quarrel',
        ru: 'Ссора, ссориться',
    },
    {
        en: 'Set',
        ru: 'Устанавливать',
    },
    {
        en: 'Sweep',
        ru: 'Подметать',
    },
    {
        en: 'Useless',
        ru: 'Бесполезный',
    },
    {
        en: 'Value',
        ru: 'Ценность, ценить',
    },
    {
        en: 'Visitor',
        ru: 'Посетитель',
    },
    {
        en: 'Well-known',
        ru: 'Хорошо известный',
    },
    {
        en: 'Accurately',
        ru: 'Точно',
    },
    {
        en: 'Briefcase',
        ru: 'Портфель',
    },
    {
        en: 'Calculate',
        ru: 'Рассчитать',
    },
    {
        en: 'Carelessly',
        ru: 'Неосторожно',
    },
    {
        en: 'Catastrophe',
        ru: 'Катастрофа',
    },
    {
        en: 'Confuse',
        ru: 'Путать',
    },
    {
        en: 'Despite',
        ru: 'Несмотря на',
    },
    {
        en: 'Disaster',
        ru: 'Катастрофа',
    },
    {
        en: 'Even',
        ru: 'Даже',
    },
    {
        en: 'Notion',
        ru: 'Понятие',
    },
    {
        en: 'Safely',
        ru: 'Безопасно',
    },
    {
        en: 'In spite of',
        ru: 'Несмотря на',
    },
    {
        en: 'Survive',
        ru: 'Выжить',
    },
    {
        en: 'Sweet',
        ru: 'Сладкий',
    },
    {
        en: 'Victory',
        ru: 'Победа',
    },
    {
        en: 'Audience',
        ru: 'Айдитория',
    },
    {
        en: 'Avoid',
        ru: 'Избегать',
    },
    {
        en: 'Considerably',
        ru: 'Значительно',
    },
    {
        en: 'Crash',
        ru: 'Катастрофа',
    },
    {
        en: 'Hospitality',
        ru: 'Гостеприимство',
    },
    {
        en: 'Hunger',
        ru: 'Голод',
    },
    {
        en: 'Notebook',
        ru: 'Ноутбук',
    },
    {
        en: 'Significantly',
        ru: 'Значительно',
    },
    {
        en: 'Visa',
        ru: 'Виза',
    },
    {
        en: 'Accusation',
        ru: 'Обвинение',
    },
    {
        en: 'Afford',
        ru: 'Позволить',
    },
    {
        en: 'Angrily',
        ru: 'Сердито',
    },
    {
        en: 'Appear',
        ru: 'Появиться',
    },
    {
        en: 'Beard',
        ru: 'Борода',
    },
    {
        en: 'Both',
        ru: 'Оба',
    },
    {
        en: 'Cite',
        ru: 'Цитировать',
    },
    {
        en: 'Concern',
        ru: 'Касаться',
    },
    {
        en: 'Deny',
        ru: 'Отрицать',
    },
    {
        en: 'Gas',
        ru: 'Газ',
    },
    {
        en: 'Guilt',
        ru: 'Вина',
    },
    {
        en: 'Hunt',
        ru: 'Охотиться',
    },
    {
        en: 'Influence',
        ru: 'Влияние',
    },
    {
        en: 'Moustache',
        ru: 'Усы',
    },
    {
        en: 'Oil',
        ru: 'Масло, нефть',
    },
    {
        en: 'Shave',
        ru: 'Бриться',
    },
    {
        en: 'Spell',
        ru: 'Произносить или писать по буквам',
    },
    {
        en: 'Strongly',
        ru: 'Сильно',
    },
    {
        en: 'Suburbs',
        ru: 'Пригород',
    },
    {
        en: 'Supply',
        ru: 'Поставлять',
    },
    {
        en: 'Trouble',
        ru: 'Беда',
    },
    {
        en: 'Universe',
        ru: 'Вселенная',
    },
    {
        en: 'Warn',
        ru: 'Предупреждать',
    },
    {
        en: 'Wire',
        ru: 'Провод',
    },
    {
        en: 'Below',
        ru: 'Ниже',
    },
    {
        en: 'Breathe in',
        ru: 'Вдыхать',
    },
    {
        en: 'Breathe out',
        ru: 'Выдыхать',
    },
    {
        en: 'Button',
        ru: 'Кнопка',
    },
    {
        en: 'Delighted',
        ru: 'Восхищен, рад',
    },
    {
        en: 'Dig',
        ru: 'Рыть',
    },
    {
        en: 'Equipment',
        ru: 'Оборудование',
    },
    {
        en: 'Fox',
        ru: 'Лиса',
    },
    {
        en: 'Hole',
        ru: 'Дыра, яма',
    },
]

module.exports = words;

// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },
// {
//     en: '',
//         ru: '',
// },