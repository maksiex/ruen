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
        ru: 'Поздравлять',
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
    {
        en: 'Moon',
        ru: 'Луна',
    },
    {
        en: 'Peer',
        ru: 'Сверстник',
    },
    {
        en: 'Scan',
        ru: 'Сканировать',
    },
    {
        en: 'Exact',
        ru: 'Точный',
    },
    {
        en: 'Farther',
        ru: 'Дальше',
    },
    {
        en: 'Furniture',
        ru: 'Мебель',
    },
    {
        en: 'Further',
        ru: 'Дальнейший, дальше',
    },
    {
        en: 'Informative',
        ru: 'Информативный',
    },
    {
        en: 'Least',
        ru: 'Наименьший',
    },
    {
        en: 'Ours',
        ru: 'Наш',
    },
    {
        en: 'Paradise',
        ru: 'Рай',
    },
    {
        en: 'Theirs',
        ru: 'Их',
    },
    {
        en: 'Eldest',
        ru: 'Старший',
    },
    {
        en: 'Mine',
        ru: 'Мой',
    },
    {
        en: 'Previous',
        ru: 'Предыдущий',
    },
    {
        en: 'Scenario',
        ru: 'Сценарий',
    },
    {
        en: 'Season',
        ru: 'Сезон',
    },
    {
        en: 'Yours',
        ru: 'Твой, ваш',
    },
    {
        en: 'Audio',
        ru: 'Аудио',
    },
    {
        en: 'Brave',
        ru: 'Храбрый',
    },
    {
        en: 'Cruel',
        ru: 'Жестокий',
    },
    {
        en: 'Fearless',
        ru: 'Бесстрашный',
    },
    {
        en: 'Fool',
        ru: 'Дурак',
    },
    {
        en: 'Lair',
        ru: 'Лжец',
    },
    {
        en: 'Theory',
        ru: 'Теория',
    },
    {
        en: 'Academic',
        ru: 'Академический',
    },
    {
        en: 'Direct',
        ru: 'Прямой',
    },
    {
        en: 'Dry',
        ru: 'Сухой',
    },
    {
        en: 'Fortress',
        ru: 'Крепость',
    },
    {
        en: 'Gold',
        ru: 'Золото, золотой',
    },
    {
        en: 'Leather',
        ru: 'Кожа, кожаный',
    },
    {
        en: 'Medal',
        ru: 'Медаль',
    },
    {
        en: 'Phenomenon',
        ru: 'Феномен',
    },
    {
        en: 'Procedure',
        ru: 'Процедура',
    },
    {
        en: 'Religious',
        ru: 'Религиозный',
    },
    {
        en: 'Runner',
        ru: 'Бегун',
    },
    {
        en: 'Silver',
        ru: 'Серебряный',
    },
    {
        en: 'Standard',
        ru: 'Стандарт, стандартный',
    },
    {
        en: 'Bitter',
        ru: 'Горький',
    },
    {
        en: 'Candy',
        ru: 'Конфета',
    },
    {
        en: 'Creative',
        ru: 'Креативный',
    },
    {
        en: 'Dead',
        ru: 'Мертвый',
    },
    {
        en: 'Disappointment',
        ru: 'Разочарование',
    },
    {
        en: 'Distance',
        ru: 'Расстояние, дистанция',
    },
    {
        en: 'Educational',
        ru: 'Образовательный',
    },
    {
        en: 'Forbid',
        ru: 'Запретить',
    },
    {
        en: 'Located',
        ru: 'Расположенный',
    },
    {
        en: 'Rare',
        ru: 'Редкий',
    },
    {
        en: 'Side',
        ru: 'Сторона',
    },
    {
        en: 'Situated',
        ru: 'Расположенный',
    },
    {
        en: 'Technical',
        ru: 'Технический',
    },
    {
        en: 'Terribly',
        ru: 'Ужасно',
    },
    {
        en: 'Dear',
        ru: 'Дорогой',
    },
    {
        en: 'Global',
        ru: 'Глобальный',
    },
    {
        en: 'Opposite',
        ru: 'Противоположный',
    },
    {
        en: 'Plastic',
        ru: 'Пластик',
    },
    {
        en: 'The Soviet Union',
        ru: 'Советский Союз',
    },
    {
        en: 'Surgery',
        ru: 'Хирургия',
    },
    {
        en: 'Ugly',
        ru: 'Уродливый',
    },
    {
        en: 'Various',
        ru: 'Различный',
    },
    {
        en: 'Meaning',
        ru: 'Смысл',
    },
    {
        en: 'Broad',
        ru: 'Широкий',
    },
    {
        en: 'Dirty',
        ru: 'Грязный',
    },
    {
        en: 'Grey',
        ru: 'Серый',
    },
    {
        en: 'Hero',
        ru: 'Герой',
    },
    {
        en: 'Hers',
        ru: 'Её',
    },
    {
        en: 'Illegal',
        ru: 'Нелегальный',
    },
    {
        en: 'National',
        ru: 'Национальный',
    },
    {
        en: 'Ordinary',
        ru: 'Обычный',
    },
    {
        en: 'Planet',
        ru: 'Планета',
    },
    {
        en: 'Political',
        ru: 'Политический',
    },
    {
        en: 'Safe',
        ru: 'Безопасный',
    },
    {
        en: 'Security',
        ru: 'Безопасность',
    },
    {
        en: 'Shoulder',
        ru: 'Плечо',
    },
    {
        en: 'Sin',
        ru: 'Грех',
    },
    {
        en: 'Total',
        ru: 'Общий',
    },
    {
        en: 'Trend',
        ru: 'Тенденция',
    },
    {
        en: 'Patient',
        ru: 'Терпеливый',
    },
    {
        en: 'Aggressive',
        ru: 'Агрессивный',
    },
    {
        en: 'Certain',
        ru: 'Определенный',
    },
    {
        en: 'Character',
        ru: 'Характер',
    },
    {
        en: 'Climate',
        ru: 'Климат',
    },
    {
        en: 'Commercial',
        ru: 'Коммерческий',
    },
    {
        en: 'Recent',
        ru: 'Недавний',
    },
    {
        en: 'Specific',
        ru: 'Специфический',
    },
    {
        en: 'Valuable',
        ru: 'Ценный',
    },
    {
        en: 'Slow',
        ru: 'Медленный',
    },
    {
        en: 'Active',
        ru: 'Активный',
    },
    {
        en: 'Announcement',
        ru: 'Объявление',
    },
    {
        en: 'Approach',
        ru: 'Подход',
    },
    {
        en: 'Complex',
        ru: 'Сложный',
    },
    {
        en: 'Cool',
        ru: 'Прохладный',
    },
    {
        en: 'False',
        ru: 'Ложь',
    },
    {
        en: 'Feature',
        ru: 'Особенность, черта',
    },
    {
        en: 'Frequent',
        ru: 'Частый',
    },
    {
        en: 'Frequently',
        ru: 'Часто',
    },
    {
        en: 'Guilty',
        ru: 'Виновный',
    },
    {
        en: 'Honest',
        ru: 'Честный',
    },
    {
        en: 'Intelligent',
        ru: 'Умный',
    },
    {
        en: 'Judge',
        ru: 'Судья, судить',
    },
    {
        en: 'Research',
        ru: 'Исследование',
    },
    {
        en: 'Scientific',
        ru: 'Научный',
    },
    {
        en: 'Speed',
        ru: 'Скорость',
    },
    {
        en: 'Stupid',
        ru: 'Тупой',
    },
    {
        en: 'Anyone',
        ru: 'Любой',
    },
    {
        en: 'Clever',
        ru: 'Умный',
    },
    {
        en: 'Ear',
        ru: 'Ухо',
    },
    {
        en: 'Exactly',
        ru: 'Точно',
    },
    {
        en: 'Ought to',
        ru: 'Следует',
    },
    {
        en: 'Toilet',
        ru: 'Туалет',
    },
    {
        en: 'Aunt',
        ru: 'Тетя',
    },
    {
        en: 'Baggage',
        ru: 'Багаж',
    },
    {
        en: 'Balcony',
        ru: 'Балкон',
    },
    {
        en: 'Bear',
        ru: 'Медведь',
    },
    {
        en: 'Chicken',
        ru: 'Курица',
    },
    {
        en: 'Crocodile',
        ru: 'Крокодил',
    },
    {
        en: 'Dining room',
        ru: 'Столовая',
    },
    {
        en: 'Dirt',
        ru: 'Грязь',
    },
    {
        en: 'Fridge',
        ru: 'Холодильник',
    },
    {
        en: 'Garage',
        ru: 'Гараж',
    },
    {
        en: 'Giraffe',
        ru: 'Жираф',
    },
    {
        en: 'Grandma',
        ru: 'Бабушка',
    },
    {
        en: 'Lift',
        ru: 'Лифт, поднимать',
    },
    {
        en: 'Luggage',
        ru: 'Багаж',
    },
    {
        en: 'Monkey',
        ru: 'Обезьяна',
    },
    {
        en: 'Pig',
        ru: 'Свинья',
    },
    {
        en: 'Power',
        ru: 'Мощность',
    },
    {
        en: 'Printer',
        ru: 'Принтер',
    },
    {
        en: 'Tiger',
        ru: 'Тигр',
    },
    {
        en: 'Calculator',
        ru: 'Калькулятор',
    },
    {
        en: 'Carpet',
        ru: 'Ковер',
    },
    {
        en: 'Intention',
        ru: 'Намерение',
    },
    {
        en: 'Literature',
        ru: 'Литература',
    },
    {
        en: 'Rollerblades',
        ru: 'Роликовые коньки',
    },
    {
        en: 'Rug',
        ru: 'Ковер',
    },
    {
        en: 'Similar',
        ru: 'Похожий',
    },
    {
    en: 'Skateboard',
        ru: 'Скейтборд',
},
{
    en: 'Mistake',
        ru: 'Ошибаться',
},
{
    en: 'Fourteen',
        ru: 'Четырнадцать',
},
{
    en: 'Nineteen',
        ru: 'Девятнадцать',
},
{
    en: 'Professor',
        ru: 'Профессор',
},
{
    en: 'Regret',
        ru: 'Сожалеть',
},
{
    en: 'Seventeen',
        ru: 'Семнадцать',
},
{
    en: 'Site',
        ru: 'Сайт',
},
{
    en: 'Sixteen',
        ru: 'Шестнадцать',
},
{
    en: 'Thirteen',
        ru: 'Тринанцать',
},
{
    en: 'Twelve',
        ru: 'Двенадцать',
},
{
    en: 'Architecture',
        ru: 'Архитектура',
},
{
    en: 'Cigarette',
        ru: 'Сигарета',
},
{
    en: 'Fork',
        ru: 'Вилка',
},
{
    en: 'Graphic',
        ru: 'Графический',
},
{
    en: 'Ice',
        ru: 'Лед',
},
{
    en: 'Lemon',
        ru: 'Лимон',
},
{
    en: 'Salt',
        ru: 'Соль',
},
{
    en: 'Shall',
        ru: 'Будет',
},
{
    en: 'Sugar',
        ru: 'Сахар',
},
{
    en: 'Temperature',
        ru: 'Температура',
},
{
    en: 'Unbelievable',
        ru: 'Невероятный',
},
{
    en: 'Zero',
        ru: 'Ноль',
},
{
    en: 'Average',
        ru: 'Средний',
},
{
    en: 'Either',
        ru: 'Либо',
},
{
    en: 'Neither',
        ru: 'Никто',
},
{
    en: 'None',
        ru: 'Ни один',
},
{
    en: 'Nor',
        ru: 'Ни',
},
{
    en: 'Simply',
        ru: 'Просто',
},
{
    en: 'Somebody',
        ru: 'Кто-то',
},
{
    en: 'Just',
        ru: 'Только что',
},
{
    en: 'Accustomed',
        ru: 'Привыкший',
},
{
    en: 'Anxious',
        ru: 'Обеспокоенный',
},
{
    en: 'Beauty',
        ru: 'Красота',
},
{
    en: 'Capable',
        ru: 'Способный',
},
{
    en: 'Familiar',
        ru: 'Знакомый',
},
{
    en: 'Incapable',
        ru: 'Неспособный',
},
{
    en: 'Jealous',
        ru: 'Ревнивый',
},
{
    en: 'Pressure',
        ru: 'Давление',
},
{
    en: 'Related',
        ru: 'Связанный',
},
{
    en: 'Responsible',
        ru: 'Ответственный',
},
{
    en: 'Sensitive',
        ru: 'Чувствительный',
},
{
    en: 'Wealth',
        ru: 'Богатство',
},
{
    en: 'Amazed',
        ru: 'Пораженный',
},
{
    en: 'Ashamed',
        ru: 'Стыдно',
},
{
    en: 'Aware',
        ru: 'Осведомленный',
},
{
    en: 'Beginner',
        ru: 'Начинающий',
},
{
    en: 'Crowded',
        ru: 'Переполненный',
},
{
    en: 'Dissatisfied',
        ru: 'Неудовлетворенный',
},
{
    en: 'Elevator',
        ru: 'Лифт',
},
{
    en: 'Engine',
        ru: 'Двигатель',
},
{
    en: 'Enthusiastic',
        ru: 'Восторженный',
},
{
    en: 'Management',
        ru: 'Менеджмент',
},
{
    en: 'Scared',
        ru: 'Испуганный',
},
{
    en: 'Selfish',
        ru: 'Эгистичный',
},
{
    en: 'Suitable',
        ru: 'Подходящий',
},
{
    en: 'Unknown',
        ru: 'Неизвестный',
},
{
    en: 'Acquainted',
        ru: 'Знакомый',
},
{
    en: 'Allergic',
        ru: 'Аллергический',
},
{
    en: 'Annoyed',
        ru: 'Раздраженный',
},
{
    en: 'Bored',
        ru: 'Наскучило',
},
{
    en: 'Cotton',
        ru: 'Хлопок',
},
{
    en: 'Dust',
        ru: 'Пыль',
},
{
    en: 'Envious',
        ru: 'Завистливый',
},
{
    en: 'Furious',
        ru: 'Яростный',
},
{
    en: 'Grateful',
        ru: 'Благодарный',
},
{
    en: 'Hopeless',
        ru: 'Безнадежный',
},
{
    en: 'Irritated',
        ru: 'Раздраженный',
},
{
    en: 'Metal',
        ru: 'Металл, металлический',
},
{
    en: 'Nut',
        ru: 'Орех',
},
{
    en: 'Rudeness',
        ru: 'Грубость',
},
{
    en: 'Skating',
        ru: 'Катание на коньках',
},
{
    en: 'Steel',
        ru: 'Сталь',
},
{
    en: 'Wool',
        ru: 'Шерсть',
},
{
    en: 'Blame',
        ru: 'Винить',
},
{
    en: 'Devote',
        ru: 'Уделять, посвящать',
},
{
    en: 'Tournament',
        ru: 'Турнир',
},
{
    en: 'Alternative',
        ru: 'Альтернатива, альтернативный',
},
{
    en: 'Conclusion',
        ru: 'Вывод',
},
{
    en: 'Courage',
        ru: 'Мужество',
},
{
    en: 'Demand',
        ru: 'Спрос',
},
{
    en: 'Insomnia',
        ru: 'Бессонница',
},
{
    en: 'Professionalism',
        ru: 'Профессионализм',
},
{
    en: 'Quote',
        ru: 'Цитата, цитировать',
},
{
    en: 'Refer',
        ru: 'Ссылаться',
},
{
    en: 'Respond',
        ru: 'Отвечать',
},
{
    en: 'Absurd',
        ru: 'Абсурд',
},
{
    en: 'Aqua park',
        ru: 'Аква парк',
},
{
    en: 'Career',
        ru: 'Карьера',
},
{
    en: 'Center',
        ru: 'Центр',
},
{
    en: 'Construction',
        ru: 'Конструкция',
},
{
    en: 'Curiosity',
        ru: 'Любопытство',
},
{
    en: 'Eastern',
        ru: 'Восточный',
},
{
    en: 'Effort',
        ru: 'Усилие',
},
{
    en: 'Extent',
        ru: 'Степень',
},
{
    en: 'Instance',
        ru: 'Пример',
},
{
    en: 'Northern',
        ru: 'Северный',
},
{
    en: 'Railroad',
        ru: 'Железная дорога',
},
{
    en: 'Rationally',
        ru: 'Рациональный',
},
{
    en: 'Southern',
        ru: 'Южный',
},
{
    en: 'Vain',
        ru: 'Напрасно',
},
{
    en: 'Western',
        ru: 'Западный',
},
{
    en: 'Addition',
        ru: 'Добавление',
},
{
    en: 'Charge',
        ru: 'Отвечать, заряжать',
},
{
    en: 'Contrary',
        ru: 'Наоборот',
},
{
    en: 'Disposal',
        ru: 'Распоряжение',
},
{
    en: 'Focus',
        ru: 'Фокусироваться',
},
{
    en: 'Granted',
        ru: 'Должное',
},
{
    en: 'Mood',
        ru: 'Настроение',
},
{
    en: 'Nature',
        ru: 'Природа',
},
{
    en: 'Outskirts',
        ru: 'Окраина',
},
{
    en: 'Stress',
        ru: 'Стресс',
},
{
    en: 'Term',
        ru: 'Условие, срок',
},
{
    en: 'Conduct',
        ru: 'Проводить',
},
{
    en: 'Constantly',
        ru: 'Постоянно',
},
{
    en: 'Length',
        ru: 'Длина',
},
{
    en: 'Totally',
        ru: 'Полностью',
},
{
    en: 'Above',
        ru: 'Выше',
},
{
    en: 'Billion',
        ru: 'Миллиард',
},
{
    en: 'Flat',
        ru: 'Квартира',
},
{
    en: 'However',
        ru: 'Однако',
},
{
    en: 'Region',
        ru: 'Регион',
},
{
    en: 'Surf',
        ru: 'Заниматься серфингом',
},
{
    en: 'Web',
        ru: 'Веб',
},
{
    en: 'Meal',
        ru: 'Еда',
},
{
    en: 'Race',
        ru: 'Гонка',
},
{
    en: 'Seaside',
        ru: 'Побережье',
},
{
    en: 'Hockey',
        ru: 'Хоккей',
},
{
    en: 'Absence',
        ru: 'Отсутствие',
},
{
    en: 'Festival',
        ru: 'Фестиваль',
},
{
    en: 'Potential',
        ru: 'Потенциальный',
},
{
    en: 'Threat',
        ru: 'Угроза',
},
{
    en: 'Actually',
        ru: 'На самом деле',
},
{
    en: 'Anyway',
        ru: 'В любом случае',
},
{
    en: 'Construct',
        ru: 'Конструировать',
},
{
    en: 'Everybody',
        ru: 'Все',
},
{
    en: 'Permission',
        ru: 'Разрешение',
},
{
    en: 'Persuade',
        ru: 'Уговаривать',
},
{
    en: 'Policy',
        ru: 'Политика',
},
{
    en: 'Probably',
        ru: 'Возможно',
},
{
    en: 'Unable',
        ru: 'Неспособный',
},
{
    en: 'Award',
        ru: 'Награда, награждать',
},
{
    en: 'Everywhere',
        ru: 'Везде',
},
{
    en: 'Experiment',
        ru: 'Эксперимент',
},
{
    en: 'Monthly',
        ru: 'Ежемесячно',
},
{
    en: 'Participant',
        ru: 'Участник',
},
{
    en: 'Passenger',
        ru: 'Пассажир',
},
{
    en: 'Replace',
        ru: 'Замещать',
},
{
    en: 'Rescue',
        ru: 'Спасать',
},
{
    en: 'Winner',
        ru: 'Победитель',
},
{
    en: 'Yearly',
        ru: 'Ежегодно',
},
{
    en: 'Canteen',
        ru: 'Столовая',
},
{
    en: 'Ceiling',
        ru: 'Потолок',
},
{
    en: 'Dismiss',
        ru: 'Увольнять',
},
{
    en: 'Formally',
        ru: 'Формально',
},
{
    en: 'Injustice',
        ru: 'Несправедливость',
},
{
    en: 'Isolated',
        ru: 'Изолированный',
},
{
    en: 'Novel',
        ru: 'Роман',
},
{
    en: 'Politely',
        ru: 'Вежливо',
},
{
    en: 'Portion',
        ru: 'Порция',
},
{
    en: 'Rebuild',
        ru: 'Восстанавливать',
},
{
    en: 'Reconstruct',
        ru: 'Реконструировать',
},
{
    en: 'Survey',
        ru: 'Опрос',
},
{
    en: 'Worth',
        ru: 'Стоит',
},
{
    en: 'Base',
        ru: 'Основываться, основа',
},
{
    en: 'Burglar',
        ru: 'Грабитель',
},
{
    en: 'Environment',
        ru: 'Окружающая среда',
},
{
    en: 'Harm',
        ru: 'Вред',
},
{
    en: 'Headquarters',
        ru: 'Штаб-квартира',
},
{
    en: 'Import',
        ru: 'Импорт, импортировать',
},
{
    en: 'Jail',
        ru: 'Тюрьма',
},
{
    en: 'Pear',
        ru: 'Груша',
},
{
    en: 'Unclearly',
        ru: 'Неясно',
},
{
    en: 'Builder',
        ru: 'Строитель',
},
{
    en: 'Cabinet',
        ru: 'Кабинет',
},
{
    en: 'Cover',
        ru: 'Порывать',
},
{
    en: 'Culture',
        ru: 'Культура',
},
{
    en: 'Greet',
        ru: 'Приветствовать',
},
{
    en: 'Ourselves',
        ru: 'Сами',
},
{
    en: 'Pick up',
        ru: 'Подбирать',
},
{
    en: 'System',
        ru: 'Система',
},
{
    en: 'Along',
        ru: 'Вдоль',
},
{
    en: 'Billionaire',
        ru: 'Миллиардер',
},
{
    en: 'Energetic',
        ru: 'Энергичный',
},
{
    en: 'Globalization',
        ru: 'Глобализация',
},
{
    en: 'Haircut',
        ru: 'Стрижка',
},
{
    en: 'Hairstyle',
        ru: 'Прическа',
},
{
    en: 'Ineffectively',
        ru: 'Неэффективно',
},
{
    en: 'International',
        ru: 'Международный',
},
{
    en: 'Retire',
        ru: 'Выходить на пенсию',
},
{
    en: 'Unattractive',
        ru: 'Непривлекательный',
},
{
    en: 'Admiration',
        ru: 'Восхищение',
},
{
    en: 'Due to',
        ru: 'Из-за',
},
{
    en: 'Edit',
        ru: 'Редактировать',
},
{
    en: 'Fasten',
        ru: 'Застегнуть',
},
{
    en: 'Prohibit',
        ru: 'Запрещать',
},
{
    en: 'Redecorate',
        ru: 'Ремонтировать',
},
{
    en: 'Strictly',
        ru: 'Строго',
},
{
    en: 'Cross',
        ru: 'Пересекать',
},
{
    en: 'Freeze',
        ru: 'Замораживать',
},
{
    en: 'Gain',
        ru: 'Набрать',
},
{
    en: 'Indoors',
        ru: 'В помещении',
},
{
    en: 'Melt',
        ru: 'Плавиться, таять',
},
{
    en: 'Original',
        ru: 'Оригинал',
},
{
    en: 'Plenty of',
        ru: 'Множество',
},
{
    en: 'Press',
        ru: 'Нажать',
},
{
    en: 'Radical',
        ru: 'Радикальный',
},
{
    en: 'Aggression',
        ru: 'Агрессия',
},
{
    en: 'Countryside',
        ru: 'Сельская местность',
},
{
    en: 'Flexible',
        ru: 'Гибкий',
},
{
    en: 'Millionaire',
        ru: 'Миллионер',
},
{
    en: 'Oligarch',
        ru: 'Олигарх',
},
{
    en: 'Paperwork',
        ru: 'Бумажная работа',
},
{
    en: 'Schedule',
        ru: 'Расписание',
},
{
    en: 'Yacht',
        ru: 'Яхта',
},
{
    en: 'Attempt',
        ru: 'Попытка',
},
{
    en: 'Pollute',
        ru: 'Загрязнять',
},
{
    en: 'Proof',
        ru: 'Доказательство',
},
{
    en: 'Author',
        ru: 'Автор',
},
{
    en: 'Depart',
        ru: 'Отправляться',
},
{
    en: 'Indirect',
        ru: 'Косвенный',
},
{
    en: 'Magnificent',
        ru: 'Великолепный',
},
{
    en: 'Supper',
        ru: 'Ужин',
},
{
    en: 'Wonder',
        ru: 'Интересоваться, интересно',
},
{
    en: 'Bookshelf',
        ru: 'Книжная полка',
},
{
    en: 'Connection',
        ru: 'Соединение',
},
{
    en: 'Election',
        ru: 'Выборы',
},
{
    en: 'Hamster',
        ru: 'Хомяк',
},
{
    en: 'Pause',
        ru: 'Пауза',
},
{
    en: 'Rabbit',
        ru: 'Кролик',
},
{
    en: 'Sex',
        ru: 'Пол',
},
{
    en: 'Whether',
        ru: 'ли',
},
{
    en: 'The European Union',
        ru: 'Европейский союз',
},
{
    en: 'Fancy',
        ru: 'Нравится, хотеть',
},
{
    en: 'Member',
        ru: 'Член, участник',
},
{
    en: 'Postpone',
        ru: 'Откладывать',
},
{
    en: 'Double',
        ru: 'Двойной',
},
{
    en: 'Hometown',
        ru: 'Родной город',
},
{
    en: 'Laundry',
        ru: 'Стирка',
},
{
    en: 'Pastime',
        ru: 'Времяпровождение',
},
{
    en: 'Queue',
        ru: 'Очередь',
},
{
    en: 'Snack',
        ru: 'Перекус',
},
{
    en: 'Someday',
        ru: 'Когда-нибудь',
},
{
    en: 'Tend',
        ru: 'Склоняться',
},
{
    en: 'Plan',
        ru: 'Планировать',
},
{
    en: 'Cheque',
        ru: 'Чек',
},
{
    en: 'Context',
        ru: 'Контекст',
},
{
    en: 'Direction',
        ru: 'Направление',
},
{
    en: 'Fan',
        ru: 'Поклонник',
},
{
    en: 'Intend',
        ru: 'Намереваться',
},
{
    en: 'Remain',
        ru: 'Оставаться',
},
{
    en: 'Themselves',
        ru: 'Сами',
},
{
    en: 'Educate',
        ru: 'Воспитывать',
},
{
    en: 'Statistics',
        ru: 'Статистика',
},
{
    en: 'Charitable',
        ru: 'Благотворительность',
},
    {
        en: 'Duty',
        ru: 'Обязанность',
    },
    {
        en: 'Frank',
        ru: 'Откровенный',
    },
    {
        en: 'Mission',
        ru: 'Миссия',
    },
    {
        en: 'Weird',
        ru: 'Странный',
    },
    {
        en: 'Iron',
        ru: 'Гладить',
    },
    {
        en: 'Cloudy',
        ru: 'Облачный',
    },
    {
        en: 'Economical',
        ru: 'Экономный',
    },
    {
        en: 'Though',
        ru: 'Хотя',
    },
    {
        en: 'Tower',
        ru: 'Башня',
    },
    {
        en: 'Weapon',
        ru: 'Оружие',
    },
    {
        en: 'Used',
        ru: 'Используемые, привык',
    },
    {
        en: 'Approximately',
        ru: 'Приблизительно',
    },
    {
        en: 'Complicated',
        ru: 'Сложный',
    },
    {
        en: 'Gallery',
        ru: 'Галерея',
    },
    {
        en: 'Inevitable',
        ru: 'Неизбежный',
    },
    {
        en: 'Player',
        ru: 'Игрок',
    },
    {
        en: 'Sneakers',
        ru: 'Кроссовки',
    },
    {
        en: 'Artificial',
        ru: 'Искусственный',
    },
    {
        en: 'Courageous',
        ru: 'Отважный',
    },
    {
        en: 'Electronic',
        ru: 'Электронный',
    },
    {
        en: 'Exit',
        ru: 'Выход',
    },
    {
        en: 'Foolish',
        ru: 'Глупый, дурацкий',
    },
    {
        en: 'Gadget',
        ru: 'Гаджет',
    },
    {
        en: 'Historical',
        ru: 'Исторический',
    },
    {
        en: 'Immediate',
        ru: 'Немедленный',
    },
    {
        en: 'Loyal',
        ru: 'Лояльный',
    },
    {
        en: 'Period',
        ru: 'Период',
    },
    {
        en: 'Physically',
        ru: 'Физически',
    },
    {
        en: 'Precious',
        ru: 'Драгоценный',
    },
    {
        en: 'Principle',
        ru: 'Принцип',
    },
    {
        en: 'Rapid',
        ru: 'Быстрый',
    },
    {
        en: 'Relation',
        ru: 'Связь, отношение',
    },
    {
        en: 'Stability',
        ru: 'Стабильность',
    },
    {
        en: 'Unstable',
        ru: 'Нестабильный',
    },
    {
        en: 'Annual',
        ru: 'Ежегодный',
    },
    {
        en: 'Appropriate',
        ru: 'Соответствующий',
    },
    {
        en: 'Cultural',
        ru: 'Культурный',
    },
    {
        en: 'Curly',
        ru: 'Кудрявый',
    },
    {
        en: 'Dreadful',
        ru: 'Ужасный',
    },
    {
        en: 'Environmental',
        ru: 'Касающийся окружающей среды',
    },
    {
        en: 'Especially',
        ru: 'Особенно',
    },
    {
        en: 'Exceed',
        ru: 'Превосходить',
    },
    {
        en: 'Expectation',
        ru: 'Ожидание',
    },
    {
        en: 'Flavour',
        ru: 'Аромат',
    },
    {
        en: 'Heritage',
        ru: 'Наследие',
    },
    {
        en: 'Impression',
        ru: 'Впечатление',
    },
    {
        en: 'Impressive',
        ru: 'Впечатляющий',
    },
    {
        en: 'Maximum',
        ru: 'Максимальный',
    },
    {
        en: 'Modest',
        ru: 'Скромный',
    },
    {
        en: 'Old-fashioned',
        ru: 'Старомодный',
    },
    {
        en: 'Per cent',
            ru: 'Проценты',
    },
    {
        en: 'Productive',
            ru: 'Продуктивный',
    },
    {
        en: 'Punctual',
            ru: 'Пунктуальный',
    },
    {
        en: 'Relatively',
            ru: 'Относительно',
    },
    {
        en: 'Surface',
            ru: 'Поверхность',
    },
    {
        en: 'Surprisingly',
            ru: 'Удивительно',
    },
    {
        en: 'Tidy',
            ru: 'Аккуратный',
    },
    {
        en: 'Turnover',
            ru: 'Оборот',
    },
    {
        en: 'The United Nations',
            ru: 'Объединенные нации',
    },
    {
        en: 'Unlikely',
            ru: 'Маловероятно',
    },
    {
        en: 'User',
            ru: 'Пользователь',
    },
    {
        en: 'Fine',
            ru: 'Штраф',
    },
    {
        en: 'Arrogant',
            ru: 'Высокомерный',
    },
    {
        en: 'Careless',
            ru: 'Неосторожный',
    },
    {
        en: 'Childish',
            ru: 'Детский',
    },
    {
        en: 'Extreme',
            ru: 'Экстремальный',
    },
    {
        en: 'Helpful',
            ru: 'Полезный',
    },
    {
        en: 'Made-up',
            ru: 'Выдуманный',
    },
    {
        en: 'Native',
            ru: 'Родной',
    },
    {
        en: 'Rather',
            ru: 'Довольно',
    },
    {
        en: 'Sensible',
            ru: 'Разумный',
    },
    {
        en: 'Suggestion',
            ru: 'Предложение',
    },
    {
        en: 'Unnatural',
            ru: 'Неестесвенный',
    },
    {
        en: 'Bizarre',
            ru: 'Странный',
    },
    {
        en: 'Emotional',
            ru: 'Эмоциональный',
    },
    {
        en: 'Equal',
            ru: 'Равный',
    },
    {
        en: 'External',
            ru: 'Внешний',
    },
    {
        en: 'Function',
            ru: 'Функция',
    },
    {
        en: 'Gigantic',
            ru: 'Гигантский',
    },
    {
        en: 'Inactive',
            ru: 'Неактинвный',
    },
    {
        en: 'Manner',
            ru: 'Манера',
    },
    {
        en: 'Manufacture',
            ru: 'Производство',
    },
    {
        en: 'Mysterious',
            ru: 'Загадочный',
    },
    {
        en: 'Painful',
            ru: 'Болезненный',
    },
    {
        en: 'Sincere',
            ru: 'Искренний',
    },
    {
        en: 'Source',
            ru: 'Источник',
    },
    {
        en: 'Temporarily',
            ru: 'Временно',
    },
    {
        en: 'Unreliable',
            ru: 'Ненадежный',
    },
    {
        en: 'Face',
            ru: 'Сталкиваться',
    },
    {
        en: 'Chemical',
            ru: 'Химический',
    },
    {
        en: 'Determined',
            ru: 'Решительный',
    },
    {
        en: 'Dull',
            ru: 'Скучный, унылый',
    },
    {
        en: 'Elegant',
            ru: 'Элегантный',
    },
    {
        en: 'Element',
            ru: 'Элемент',
    },
    {
        en: 'Impatient',
            ru: 'Нетерпеливый',
    },
    {
        en: 'Rational',
            ru: 'Рациональный',
    },
    {
        en: 'Realistic',
            ru: 'Реалистичный',
    },
    {
        en: 'Ripe',
            ru: 'Спелый',
    },
    {
        en: 'Sharp',
            ru: 'Острый',
    },
    {
        en: 'Skillful',
            ru: 'Умелый',
    },
    {
        en: 'Belief',
            ru: 'Вера',
    },
    {
        en: 'Border',
            ru: 'Граница',
    },
    {
        en: 'Buyer',
            ru: 'Покупатель',
    },
    {
        en: 'Classic',
            ru: 'Классический',
    },
    {
        en: 'Contradict',
            ru: 'Противоречить',
    },
    {
        en: 'Current',
            ru: 'Текущий',
    },
    {
        en: 'Extraordinary',
            ru: 'Необычный',
    },
    {
        en: 'Gifted',
            ru: 'Одаренный',
    },
    {
        en: 'Electrical',
            ru: 'Электрический',
    },
    {
        en: 'Heater',
            ru: 'Нагреватель',
    },
    {
        en: 'Highlighter',
            ru: 'Маркер',
    },
    {
        en: 'Improvement',
            ru: 'Улучшение',
    },
    {
        en: 'Moral',
            ru: 'Моральный',
    },
    {
        en: 'Neglect',
            ru: 'Пренебрегать',
    },
    {
        en: 'Slight',
            ru: 'Незначительный',
    },
    {
        en: 'Spiritual',
            ru: 'Духовный',
    },
    {
        en: 'Thankful',
            ru: 'Благодарный',
    },
    {
        en: 'Unpopular',
            ru: 'Непопулярный',
    },
    {
        en: 'Unwilling',
            ru: 'Не желающий',
    },
    {
        en: 'Acceptable',
            ru: 'Приемлемый',
    },
    {
        en: 'Available',
            ru: 'Доступный',
    },
    {
        en: 'Bunch',
            ru: 'Гроздь',
    },
    {
        en: 'Clinical',
            ru: 'Клинический',
    },
    {
        en: 'Enormous',
            ru: 'Огромный',
    },
    {
        en: 'Horrible',
            ru: 'Ужасный',
    },
    {
        en: 'Legal',
            ru: 'Легальный',
    },
    {
        en: 'Metre',
            ru: 'Метр',
    },
    {
        en: 'Naive',
            ru: 'Наивный',
    },
    {
        en: 'Objective',
            ru: 'Объективный',
    },
    {
        en: 'Overtime',
            ru: 'Сверхурочно',
    },
    {
        en: 'Pale',
            ru: 'Бледный',
    },
    {
        en: 'Philosophical',
            ru: 'Философский',
    },
    {
        en: 'Rose',
            ru: 'Роза',
    },
    {
        en: 'Row',
            ru: 'Ряд',
    },
    {
        en: 'Square',
            ru: 'Квадрат, квадратный',
    },
    {
        en: 'State',
            ru: 'Штат',
    },
    {
        en: 'Waist',
            ru: 'Талия',
    },
    {
        en: 'Calm',
            ru: 'Спокойный',
    },
    {
        en: 'Cautious',
            ru: 'Осторожный',
    },
    {
        en: 'Consequence',
            ru: 'Сдедствие',
    },
    {
        en: 'Exclusive',
            ru: 'Эксклюзивный',
    },
    {
        en: 'Fair',
            ru: 'Справедливый',
    },
    {
        en: 'Faithful',
            ru: 'Верный',
    },
    {
        en: 'Instrument',
            ru: 'Инструмент',
    },
    {
        en: 'Jet',
            ru: 'Самолет',
    },
    {
        en: 'Musical',
            ru: 'Музыкальный',
    },
    {
        en: 'Practically',
            ru: 'Практически',
    },
    {
        en: 'Primary',
            ru: 'Первоначальный',
    },
    {
        en: 'Property',
            ru: 'Собственность',
    },
    {
        en: 'Range',
            ru: 'Ассортимент, спектр',
    },
    {
        en: 'Secure',
            ru: 'Безопасный',
    },
    {
        en: 'Treatment',
            ru: 'Лечение, обращение',
    },
    {
        en: 'Uncertain',
            ru: 'Неуверенный',
    },
    {
        en: 'Unemotional',
            ru: 'Безэмоциональный',
    },
    {
        en: 'Uninterested',
            ru: 'Незаинтересованный',
    },
    {
        en: 'Arrangement',
            ru: 'Договоренность',
    },
    {
        en: 'Contain',
            ru: 'Содержать',
    },
    {
        en: 'Convinced',
            ru: 'Убежден',
    },
    {
        en: 'Exception',
            ru: 'Исключение',
    },
    {
        en: 'Exciting',
            ru: 'Захватывающий',
    },
    {
        en: 'Organism',
            ru: 'Организм',
    },
    {
        en: 'Overall',
            ru: 'В целом, общий',
    },
    {
        en: 'Particular',
            ru: 'Особенный',
    },
    {
        en: 'Passive',
            ru: 'Пассивный',
    },
    {
        en: 'Reasonable',
            ru: 'Разумный',
    },
    {
        en: 'Romantic',
            ru: 'Романтичный',
    },
    {
        en: 'Silent',
            ru: 'Бесшумный',
    },
    {
        en: 'Unfair',
            ru: 'Несправедливый',
    },
    {
        en: 'Wavy',
            ru: 'Волнисный',
    },
    {
        en: 'Wild',
            ru: 'Дикий',
    },
    {
        en: 'Willing',
            ru: 'Желающий',
    },
    {
        en: 'Aspect',
            ru: 'Аспект',
    },
    {
        en: 'Awesome',
            ru: 'Потрясающий',
    },
    {
        en: 'Brief',
            ru: 'Краткий',
    },
    {
        en: 'Essential',
            ru: 'Необходимый',
    },
    {
        en: 'Illogical',
            ru: 'Нелогичный',
    },
    {
        en: 'Irritate',
            ru: 'Раздражать',
    },
    {
        en: 'Knowledgeable',
            ru: 'Знающий',
    },
    {
        en: 'Logical',
            ru: 'Логический',
    },
    {
        en: 'Skin',
            ru: 'Кожа',
    },
    {
        en: 'Smooth',
            ru: 'Гладкий',
    },
    {
        en: 'Thoughtful',
            ru: 'Задумчивый',
    },
    {
        en: 'Unfriendly',
            ru: 'Недружелюбный',
    },
    {
        en: 'Unsure',
            ru: 'Неуверенный',
    },
    {
        en: 'Wet',
            ru: 'Мокрый',
    },
    {
        en: 'Attentive',
            ru: 'Внимательный',
    },
    {
        en: 'Broad-minded',
            ru: 'С широким кругозором',
    },
    {
        en: 'Competent',
            ru: 'Компетентный',
    },
    {
        en: 'Decisive',
            ru: 'Решающий',
    },
    {
        en: 'Embarrassed',
            ru: 'Смущенный',
    },
    {
        en: 'Handsome',
            ru: 'Красивый',
    },
    {
        en: 'Incompetent',
            ru: 'Некомпетентный',
    },
    {
        en: 'Individual',
        ru: 'Индивидуальный',
    },
    {
        en: 'Internal',
            ru: 'Внутренний',
    },
    {
        en: 'Practical',
        ru: 'Практический',
    },
    {
        en: 'Psychological',
        ru: 'Психологический',
    },
    {
        en: 'Quick',
        ru: 'Быстрый',
    },
    {
        en: 'Self-confident',
            ru: 'Самоуверенный',
    },
    {
        en: 'Shy',
            ru: 'Застенчивый',
    },
    {
        en: 'Sociable',
            ru: 'Общительный',
    },
    {
        en: 'Thick',
            ru: 'Толстый',
    },
    {
        en: 'Wooden',
            ru: 'Деревянный',
    },
    {
        en: 'According to',
        ru: 'В соответствии с',
    },
    {
        en: 'Favour',
        ru: 'Одолжение',
    },
    {
        en: 'Ironing',
        ru: 'Глажка',
    },
    {
        en: 'Nails',
        ru: 'Ногти',
    },
    {
        en: 'Necessarily',
        ru: 'Обязательно',
    },
    {
        en: 'Reservation',
        ru: 'Бронирование',
    },
    {
        en: 'Rightly',
        ru: 'Правильно',
    },
    {
        en: 'Analyst',
        ru: 'Аналитик',
    },
    {
        en: 'Appointment',
        ru: 'Встреча',
    },
    {
        en: 'Chores',
        ru: 'Домашние дела',
    },
    {
        en: 'Favourable',
        ru: 'Благоприятный',
    },
    {
        en: 'Fuss',
        ru: 'Суета',
    },
    {
        en: 'Homeless',
        ru: 'Бездомный',
    },
    {
        en: 'Lecturer',
        ru: 'Лектор',
    },
    {
        en: 'Motto',
        ru: 'Девиз',
    },
    {
        en: 'Observation',
        ru: 'Наблюдение',
    },
    {
        en: 'Prediction',
        ru: 'Предсказание',
    },
    {
        en: 'Storm',
        ru: 'Шторм, буря',
    },
    {
        en: 'Arrival',
        ru: 'Прибытие',
    },
    {
        en: 'Bookmark',
        ru: 'Закладка, добавлять в закладки',
    },
    {
        en: 'Distantly',
        ru: 'Отделенно',
    },
    {
        en: 'Enlarge',
        ru: 'Увеличить',
    },
    {
        en: 'Oversleep',
        ru: 'Проспать',
    },
    {
        en: 'Publicly',
        ru: 'Публично',
    },
    {
        en: 'Separate',
        ru: 'Отдельный',
    },
    {
        en: 'Tiptoe',
        ru: 'Ходить на цыпочках',
    },
    {
        en: 'Widen',
        ru: 'Расширять',
    },
    {
        en: 'Adult',
        ru: 'Взрослый',
    },
    {
        en: 'Athletic',
        ru: 'Атлетический',
    },
    {
        en: 'Bankruptcy',
        ru: 'Банкротство',
    },
    {
        en: 'Air conditioning',
        ru: 'Кондиционер',
    },
    {
        en: 'Heat',
        ru: 'Жара',
    },
    {
        en: 'Severe',
        ru: 'Суровый',
    },
    {
        en: 'Verge',
        ru: 'Грань',
    },
    {
        en: 'Virtual',
        ru: 'Виртуальный',
    },
    {
        en: 'Deliberately',
        ru: 'Нарочно',
    },
    {
        en: 'Equally',
        ru: 'Равно',
    },
    {
        en: 'Fashion',
        ru: 'Мода',
    },
    {
        en: 'Hardly',
        ru: 'Едва',
    },
    {
        en: 'Honestly',
        ru: 'Честно',
    },
    {
        en: 'Hopefully',
        ru: 'С надеждой',
    },
    {
        en: 'Injured',
        ru: 'Пострадавший',
    },
    {
        en: 'Mainly',
        ru: 'В основном',
    },
    {
        en: 'Occasionally',
        ru: 'Изредка',
    },
    {
        en: 'Prevent',
        ru: 'Предотвращать',
    },
    {
        en: 'Primarily',
        ru: 'В первую очередь',
    },
    {
        en: 'Shortly',
        ru: 'Короче',
    },
    {
        en: 'Similarly',
        ru: 'Подобным образом',
    },
    {
        en: 'Currently',
        ru: 'В настоящее время',
    },
    {
        en: 'Effectively',
        ru: 'Эффективно',
    },
    {
        en: 'Employment',
        ru: 'Трудоустройство',
    },
    {
        en: 'Frankly',
        ru: 'Откровенно',
    },
    {
        en: 'Naturally',
        ru: 'Естественно',
    },
    {
        en: 'Personally',
        ru: 'Лично',
    },
    {
        en: 'Possibly',
        ru: 'Возможно',
    },
    {
        en: 'Significant',
        ru: 'Значительный',
    },
    {
        en: 'Smoothly',
        ru: 'Гладко',
    },
    {
        en: 'Unavailable',
        ru: 'Недоступный',
    },
    {
        en: 'Deeply',
        ru: 'Глубоко',
    },
    {
        en: 'Educated',
        ru: 'Образованный',
    },
    {
        en: 'Highly',
        ru: 'Очень, высоко',
    },
    {
        en: 'Indeed',
        ru: 'В самом деле',
    },
    {
        en: 'Nearly',
        ru: 'Почти',
    },
    {
        en: 'Nevertheless',
        ru: 'Тем не менее',
    },
    {
        en: 'Score',
        ru: 'Балл',
    },
    {
        en: 'Sensation',
        ru: 'Сенсация',
    },
    {
        en: 'Slightly',
        ru: 'Слегка',
    },
    {
        en: 'Toothache',
        ru: 'Зубная боль',
    },
    {
        en: 'Undoubtedly',
        ru: 'Несомненно',
    },
    {
        en: 'Wrongly',
        ru: 'Неправильно',
    },
    {
        en: 'Disapprove',
        ru: 'Не одобрять',
    },
    {
        en: 'Discomfort',
        ru: 'Дискомфорт',
    },
    {
        en: 'Endless',
        ru: 'Бесконечный',
    },
    {
        en: 'Handwriting',
        ru: 'Почерк',
    },
    {
        en: 'Harmless',
        ru: 'Безвредный',
    },
    {
        en: 'Illegible',
        ru: 'Неразборчивый',
    },
    {
        en: 'Impolite',
        ru: 'Невежливый',
    },
    {
        en: 'Inaccurate',
        ru: 'Неточный',
    },
    {
        en: 'Indecisive',
        ru: 'Нерешительный',
    },
    {
        en: 'Indifferent',
        ru: 'Безразличный',
    },
    {
        en: 'Inefficient',
        ru: 'Неэффективный',
    },
    {
        en: 'Invaluable',
        ru: 'Бесценный',
    },
    {
        en: 'Irreplaceable',
        ru: 'Незаменимый',
    },
    {
        en: 'Irresponsible',
        ru: 'Безответственный',
    },
    {
        en: 'Misunderstand',
        ru: 'Неправильно понять',
    },
    {
        en: 'Misunderstanding',
        ru: 'Недопонимание',
    },
    {
        en: 'Signature',
        ru: 'Подпись',
    },
    {
        en: 'Suffering',
        ru: 'Страдание',
    },
    {
        en: 'Unaware',
        ru: 'Не осведомлен',
    },
    {
        en: 'Unimaginable',
        ru: 'Невообразимый',
    },
    {
        en: 'Unwillingly',
        ru: 'Неохотно',
    },
    {
        en: 'Pretend',
        ru: 'Притворяться',
    },
    {
        en: 'Go on',
        ru: 'Продолжать',
    },
    {
        en: 'Look up to',
        ru: 'Уважать',
    },
    {
        en: 'Make up for',
        ru: 'Компенсировать',
    },
    {
        en: 'Throw away',
        ru: 'Выбросить',
    },
    {
        en: 'Take up',
        ru: 'Начать заниматься',
    },
    {
        en: 'Look into',
        ru: 'Исследовать',
    },
    {
        en: 'Flick through',
        ru: 'Пролистать',
    },
    {
        en: 'Figure out',
        ru: 'Понимать',
    },
    {
        en: 'Break up',
        ru: 'Расставаться',
    },
    {
        en: 'Be back',
        ru: 'Вернуться',
    },
    {
        en: 'See off',
        ru: 'Провожать',
    },
    {
        en: 'Call off',
        ru: 'Отменить',
    },
    {
        en: 'Leave out',
        ru: 'Исключать, отпускать',
    },
    {
        en: 'Ask out',
        ru: 'Пригласить на свидание',
    },
    {
        en: 'Basics',
        ru: 'Основы',
    },
    {
        en: 'Fuel',
        ru: 'Топливо',
    },
    {
        en: 'Catch up with',
        ru: 'Поспеть за',
    },
    {
        en: 'Keep up with',
        ru: 'Поспеть за',
    },
    {
        en: 'Be over',
        ru: 'Закончить',
    },
    {
        en: 'Carry on',
        ru: 'Продолжать',
    },
    {
        en: 'Come across',
        ru: 'Сталкиваться, встречать',
    },
    {
        en: 'Run out of',
        ru: 'Закончиться',
    },
    {
        en: 'Look down on',
        ru: 'Смотреть свысока',
    },
    {
        en: 'Get on',
        ru: 'Поживать, сесть',
    },
    {
        en: 'Get along with',
        ru: 'Ладить',
    },
    {
        en: 'Get on with',
        ru: 'Ладить',
    },
    {
        en: 'Get in',
        ru: 'Сесть',
    },
    {
        en: 'Get down to',
        ru: 'Приступить к',
    },
    {
        en: 'Get down',
        ru: 'Расстраивать',
    },
    {
        en: 'Find out',
        ru: 'Выяснить',
    },
    {
        en: 'Do about',
        ru: 'Делать с',
    },
    {
        en: 'Adventure',
        ru: 'Приключение',
    },
    {
        en: 'Coupon',
        ru: 'Купон',
    },
    {
        en: 'Fault',
        ru: 'Вина',
    },
    {
        en: 'Note',
        ru: 'Отмечать',
    },
    {
        en: 'Retirement',
        ru: 'Выход не пенсию',
    },
    {
        en: 'Schoolwork',
        ru: 'Школьное задание',
    },
    {
        en: 'Uncle',
        ru: 'Дядя',
    },
    {
        en: 'Come from',
        ru: 'Родом из',
    },
    {
        en: 'Bring up',
        ru: 'Воспитывать',
    },
    {
        en: 'Fill in',
        ru: 'Заполнить',
    },
    {
        en: 'Lag behind',
        ru: 'Отставать',
    },
    {
        en: 'Look after',
        ru: 'Присматривать за, ухаживать за',
    },
    {
        en: 'Come in',
        ru: 'Зайти',
    },
    {
        en: 'Take after',
        ru: 'Похож на',
    },
    {
        en: 'Look ahead',
        ru: 'Смотреть вперед',
    },
    {
        en: 'Look back',
        ru: 'Оглядываться, вспоминать',
    },
    {
        en: 'Look forward to',
        ru: 'Ждать с нетерпением',
    },
    {
        en: 'Look in',
        ru: 'Заглядывать',
    },
    {
        en: 'Look out',
        ru: 'Выглянуть, осторожно',
    },
    {
        en: 'Watch out',
        ru: 'Осторожно, берегись',
    },
    {
        en: 'Come back',
        ru: 'Возвращаться',
    },
    {
        en: 'Get at',
        ru: 'Предлагать, иметь в виду',
    },
    {
        en: 'Get back',
        ru: 'Возвращаться',
    },
    {
        en: 'Look through',
        ru: 'Просматривать',
    },
    {
        en: 'Boxing',
        ru: 'Бокс',
    },
    {
        en: 'Electricity',
        ru: 'Электричество',
    },
    {
        en: 'Forced',
        ru: 'Вынужден',
    },
    {
        en: 'Industry',
        ru: 'Отрасль, промышелнность',
    },
    {
        en: 'Occasion',
        ru: 'Случай',
    },
    {
        en: 'Proposal',
        ru: 'Предложение',
    },
    {
        en: 'Underestimate',
        ru: 'Недооценивать',
    },
    {
        en: 'Let down',
        ru: 'Подводить',
    },
    {
        en: 'Put off',
        ru: 'Откладывать',
    },
    {
        en: 'Drop out',
        ru: 'Бросить',
    },
    {
        en: 'Think over',
        ru: 'Обдумывать',
    },
    {
        en: 'Talk over',
        ru: 'Обсудить',
    },
    {
        en: 'Put up with',
        ru: 'Смириться с',
    },
    {
        en: 'Get ahead',
        ru: 'Продвинуться',
    },
    {
        en: 'Get round',
        ru: 'Обойти',
    },
    {
        en: 'Get around',
        ru: 'Обойти',
    },
    {
        en: 'Cut off',
        ru: 'Отключать, отрезать',
    },
    {
        en: 'Put up',
        ru: 'Повесить, поднять',
    },
    {
        en: 'Put on',
        ru: 'Надевать',
    },
    {
        en: 'Go by',
        ru: 'Проходить',
    },
    {
        en: 'Go in for',
        ru: 'Заниматься',
    },
    {
        en: 'Go off',
        ru: 'Портиться',
    },
    {
        en: 'Go away',
        ru: 'Уезжать',
    },
    {
        en: 'Go out',
        ru: 'Выходить',
    },
    {
        en: 'Banknote',
        ru: 'Банкнота',
    },
    {
        en: 'Brigade',
        ru: 'Бригада',
    },
    {
        en: 'Crowd',
        ru: 'Толпа',
    },
    {
        en: 'Facility',
        ru: 'Удобство',
    },
    {
        en: 'Failure',
        ru: 'Провал',
    },
    {
        en: 'Firefighter',
        ru: 'Пожарный',
    },
    {
        en: 'Flu',
        ru: 'Грипп',
    },
    {
        en: 'Inattentive',
        ru: 'Невнимательность',
    },
    {
        en: 'Inexperience',
        ru: 'Неопытность',
    },
    {
        en: 'Investigation',
        ru: 'Расследование',
    },
    {
        en: 'Laziness',
        ru: 'Лень',
    },
    {
        en: 'Operator',
        ru: 'Оператор',
    },
    {
        en: 'Savings',
        ru: 'Сбережения',
    },
    {
        en: 'Tiredness',
        ru: 'Усталость',
    },
    {
        en: 'Unprofessionalism',
        ru: 'Непрофессионализм',
    },
    {
        en: 'Get into',
        ru: 'Проникать в, смотреть в',
    },
    {
        en: 'Cheer up',
        ru: 'Взбодриться',
    },
    {
        en: 'Get by',
        ru: 'Обходиться',
    },
    {
        en: 'Get over',
        ru: 'Справиться, выздороветь',
    },
    {
        en: 'Get away',
        ru: 'Убежать, скрыться',
    },
    {
        en: 'Cut down',
        ru: 'Вырубать',
    },
    {
        en: 'Break in',
        ru: 'Врываться, вломиться',
    },
    {
        en: 'Break into',
        ru: 'Вломиться в, врываться в',
    },
    {
        en: 'Carry out',
        ru: 'Проводить',
    },
    {
        en: 'Make up',
        ru: 'Выдумать, решить',
    },
    {
        en: 'Make out',
        ru: 'Понимать',
    },
    {
        en: 'Put down to',
        ru: 'Списывать на',
    },
    {
        en: 'Put forward',
        ru: 'Выдвигать',
    },
    {
        en: 'Put out',
        ru: 'Тушить',
    },
    {
        en: 'Put through',
        ru: 'Соединять, связаться',
    },
    {
        en: 'Give away',
        ru: 'Отдавать',
    },
    {
        en: 'Cut down on',
        ru: 'Сократить',
    },
    {
        en: 'Stand up',
        ru: 'Встать',
    },
    {
        en: 'Annoy',
        ru: 'Раздражать',
    },
    {
        en: 'Competitor',
        ru: 'Конкурент',
    },
    {
        en: 'Corporation',
        ru: 'Корпорация',
    },
    {
        en: 'Objectively',
        ru: 'Объективно',
    },
    {
        en: 'Dress down',
        ru: 'Одеваться неформально',
    },
    {
        en: 'Calm down',
        ru: 'Успокоиться',
    },
    {
        en: 'Cool down',
        ru: 'Остыть',
    },
    {
        en: 'Check in',
        ru: 'Зарегистрироваться',
    },
    {
        en: 'Check out',
        ru: 'Выселяться',
    },
    {
        en: 'Dress up',
        ru: 'Наряжаться, одеваться',
    },
    {
        en: 'Put down',
        ru: 'Записывать, критиковать',
    },
    {
        en: 'Back up',
        ru: 'Поддержать, сохранить',
    },
    {
        en: 'Deal with',
        ru: 'Иметь дело с',
    },
    {
        en: 'Take over',
        ru: 'Поглотить',
    },
    {
        en: 'Put aside',
        ru: 'Откладывать',
    },
    {
        en: 'Put away',
        ru: 'Убирать',
    },
    {
        en: 'Give away',
        ru: 'Вернуть',
    },
    {
        en: 'Move forward',
        ru: 'Двигаться вперед',
    },
    {
        en: 'Call for',
        ru: 'Требовать',
    },
    {
        en: 'Close down',
        ru: 'Закрыть',
    },
    {
        en: 'Come along',
        ru: 'Идти вместе',
    },
    {
        en: 'Break out',
        ru: 'Рзаразиться',
    },
    {
        en: 'Bring down',
        ru: 'Снизить',
    },
    {
        en: 'Bring about',
        ru: 'Вызывать',
    },
    {
        en: 'Take back',
        ru: 'Забрать',
    },
    {
        en: 'Brighten up',
        ru: 'Просветлеть, скрашивать',
    },
    {
        en: 'Come on',
        ru: 'Ну же',
    },
    {
        en: 'Do up',
        ru: 'Застегивать, ремонтировать',
    },
    {
        en: 'Go back',
        ru: 'Возвращаться',
    },
    {
        en: 'Come through',
        ru: 'Проходить',
    },
    {
        en: 'Give off',
        ru: 'Выделять, издавать',
    },
    {
        en: 'Eat out',
        ru: 'Питаться вне дома',
    },
    {
        en: 'Bring forward',
        ru: 'Выдвинуть',
    },
    {
        en: 'Go against',
        ru: 'Идти против',
    },
    {
        en: 'Move on',
        ru: 'Двигаться дальше',
    },
    {
        en: 'Take in',
        ru: 'Обмануть',
    },
    {
        en: 'Open up',
        ru: 'Раскрывать',
    },
    {
        en: 'Stand up for',
        ru: 'Встать на защиту',
    },
    {
        en: 'Come to',
        ru: 'Прийти к',
    },
    {
        en: 'Go under',
        ru: 'Разориться',
    },
    {
        en: 'Give out',
        ru: 'Раздавать',
    },
    {
        en: 'Stay up',
        ru: 'Не ложиться спать',
    },
    {
        en: 'Shut down',
        ru: 'Закрывать',
    },
    {
        en: 'Come up against',
        ru: 'Натокнуться',
    },
    {
        en: 'End up',
        ru: 'Оканчиваться',
    },
    {
        en: 'Start up',
        ru: 'Создавать, начинать',
    },
    {
        en: 'Go ahead',
        ru: 'Идти вперед',
    },
    {
        en: 'Give in',
        ru: 'Уступить',
    },
    {
        en: 'See through',
        ru: 'Видеть насквозь',
    },
    {
        en: 'Go after',
        ru: 'Следовать',
    },
    {
        en: 'Bring back',
        ru: 'Вернуть',
    },
    {
        en: 'Come out',
        ru: 'Выходить',
    },
    {
        en: 'End in',
        ru: 'Закончиться',
    },
    {
        en: 'Blow up',
        ru: 'Взрывать, надувать',
    },
    {
        en: 'Get through',
        ru: 'Пройти через',
    },
    {
        en: 'Brighten',
        ru: 'Украшать',
    },
    {
        en: 'Committee',
        ru: 'Комитет',
    },
    {
        en: 'Height',
        ru: 'Рост',
    },
    {
        en: 'Leaflet',
        ru: 'Листовка',
    },
    {
        en: 'Profound',
        ru: 'Глубокий',
    },
    {
        en: 'Pullover',
        ru: 'Свитер',
    },
    {
        en: 'Shoelaces',
        ru: 'Шнурки',
    },
    {
        en: 'Tough',
        ru: 'Жесткий',
    },
    {
        en: 'Absorbed',
        ru: 'Поглощенный',
    },
    {
        en: 'Abstain',
        ru: 'Воздерживаться',
    },
    {
        en: 'Astonish',
        ru: 'Удивлять, изумлять',
    },
    {
        en: 'Boast',
        ru: 'Хвастаться',
    },
    {
        en: 'Compatible',
        ru: 'Совместимый',
    },
    {
        en: 'Content',
        ru: 'Содержание',
    },
    {
        en: 'Engrossed',
        ru: 'Поглощен',
    },
    {
        en: 'Flour',
        ru: 'Мука',
    },
    {
        en: 'Inclined',
        ru: 'Склонен',
    },
    {
        en: 'Soap opera',
        ru: 'Мыльная опера',
    },
    {
        en: 'Perseverance',
        ru: 'Настойчивость',
    },
    {
        en: 'Punctuality',
        ru: 'Пунктуальность',
    },
    {
        en: 'Renew',
        ru: 'Возобнавлять',
    },
    {
        en: 'Shipping',
        ru: 'Отправка',
    },
    {
        en: 'Subscription',
        ru: 'Подписка',
    },
    {
        en: 'Tied',
        ru: 'Завязанный',
    },
    {
        en: 'Underpay',
        ru: 'Недоплачивать',
    },
    {
        en: 'Upcoming',
        ru: 'Предстоящий',
    },
    {
        en: 'Violence',
        ru: 'Насилие',
    },
    {
        en: 'Advertisement',
        ru: 'Рекламное объявление',
    },
    {
        en: 'Anybody',
        ru: 'Кто-нибудь',
    },
    {
        en: 'Assistant',
        ru: 'Помощь',
    },
    {
        en: 'Contribution',
        ru: 'Вклад',
    },
    {
        en: 'Cooperation',
        ru: 'Сотрудничество',
    },
    {
        en: 'Cuisine',
        ru: 'Кухня',
    },
    {
        en: 'Envy',
        ru: 'Зависть',
    },
    {
        en: 'FruitFul',
        ru: 'Плодотворный',
    },
    {
        en: 'Jealousy',
        ru: 'Ревность',
    },
    {
        en: 'Meaningless',
        ru: 'Бессмысленный',
    },
    {
        en: 'Obsessed',
        ru: 'Одержимый',
    },
    {
        en: 'Occupied',
        ru: 'Занятый',
    },
    {
        en: 'Prosperity',
        ru: 'Процветание',
    },
    {
        en: 'Reform',
        ru: 'Реформа',
    },
    {
        en: 'Relationship',
        ru: 'Отношения',
    },
    {
        en: 'Resistance',
        ru: 'Сопротивление',
    },
    {
        en: 'Substantial',
        ru: 'Существенный',
    },
    {
        en: 'Sympathy',
        ru: 'Симпатия, сочувствие',
    },
    {
        en: 'Undervalue',
        ru: 'Недооценивать',
    },
    {
        en: 'Unjustly',
        ru: 'Несправедливо',
    },
    {
        en: 'Wave',
        ru: 'Волна',
    },
    {
        en: 'Wit',
        ru: 'Остроумие',
    },
    {
        en: 'Affair',
        ru: 'Дело',
    },
    {
        en: 'Antibiotic',
        ru: 'Антибиотик',
    },
    {
        en: 'Chaos',
        ru: 'Хаос',
    },
    {
        en: 'Compensate',
        ru: 'Компенсировать',
    },
    {
        en: 'Earnings',
        ru: 'Заработок',
    },
    {
        en: 'Housing',
        ru: 'Жилье',
    },
    {
        en: 'Interfere',
        ru: 'Вмешиваться',
    },
    {
        en: 'Luxury',
        ru: 'Роскошный',
    },
    {
        en: 'Miraculous',
        ru: 'Чудесный',
    },
    {
        en: 'Observe',
        ru: 'Наблюдать',
    },
    {
        en: 'Population',
        ru: 'Численность',
    },
    {
        en: 'Production',
        ru: 'Производство',
    },
    {
        en: 'Stare',
        ru: 'Пялиться',
    },
    {
        en: 'Superior',
        ru: 'Превосходный',
    },
    {
        en: 'Temper',
        ru: 'Характер',
    },
    {
        en: 'Unemployed',
        ru: 'Безработный',
    },
    {
        en: 'Unemployment',
        ru: 'Безработица',
    },
    {
        en: 'Unprecedentedly',
        ru: 'Беспрецедентно',
    },
    {
        en: 'Apparent',
        ru: 'Очевидный',
    },
    {
        en: 'Demonstrate',
        ru: 'Демонстрировать',
    },
    {
        en: 'Documentary',
        ru: 'Документальный фильм',
    },
    {
        en: 'Honestly',
        ru: 'Честность',
    },
    {
        en: 'Inconvenience',
        ru: 'Неудобство',
    },
    {
        en: 'Loneliness',
        ru: 'Одиночество',
    },
    {
        en: 'Movement',
        ru: 'Движение',
    },
    {
        en: 'Restrict',
        ru: 'Ограничивать',
    },
    {
        en: 'Terrified',
        ru: 'Напуган',
    },
    {
        en: 'Towards',
        ru: 'По направлению',
    },
    {
        en: 'Viewer',
        ru: 'Зритель',
    },
    {
        en: 'Benefit',
        ru: 'Выгода',
    },
    {
        en: 'Beware',
        ru: 'Остерегаться',
    },
    {
        en: 'Ceaseless',
        ru: 'Непрестанный',
    },
    {
        en: 'Confidential',
        ru: 'Конфиденциальный',
    },
    {
        en: 'Creativity',
        ru: 'Креативность',
    },
    {
        en: 'Depth',
        ru: 'Глубина',
    },
    {
        en: 'Erudition',
        ru: 'Эрудиция',
    },
    {
        en: 'Fragrance',
        ru: 'Аромат',
    },
    {
        en: 'Garlic',
        ru: 'Чеснок',
    },
    {
        en: 'Hasty',
        ru: 'Поспешный',
    },
    {
        en: 'Impressed',
        ru: 'Впечатлен',
    },
    {
        en: 'Incredible',
        ru: 'Невероятный',
    },
    {
        en: 'Panoramic',
        ru: 'Панорамный',
    },
    {
        en: 'Perfume',
        ru: 'Духи',
    },
    {
        en: 'Protect',
        ru: 'Защищать',
    },
    {
        en: 'Raspberry',
        ru: 'Малина',
    },
    {
        en: 'Slippery',
        ru: 'Скользкий',
    },
    {
        en: 'Strength',
        ru: 'Сила',
    },
    {
        en: 'Truly',
        ru: 'Действительно',
    },
    {
        en: 'Bin',
        ru: 'Мусорный бак',
    },
    {
        en: 'Bravery',
        ru: 'Храбрость',
    },
    {
        en: 'Determination',
        ru: 'Решительность',
    },
    {
        en: 'Detrimental',
        ru: 'Вредный',
    },
    {
        en: 'Devoted',
        ru: 'Посвященный',
    },
    {
        en: 'Genuinely',
        ru: 'Искренне',
    },
    {
        en: 'Habit',
        ru: 'Привычка',
    },
    {
        en: 'Noticeable',
        ru: 'Заметный',
    },
    {
        en: 'Rubbish',
        ru: 'Мусор',
    },
    {
        en: 'Somewhat',
        ru: 'Отчасти',
    },
    {
        en: 'Well-being',
        ru: 'Благополучие',
    },
    {
        en: 'Action',
        ru: 'Действие',
    },
    {
        en: 'Adjacent',
        ru: 'Примыкающий',
    },
    {
        en: 'Argument',
        ru: 'Аргумент',
    },
    {
        en: 'Assumption',
        ru: 'Предложение',
    },
    {
        en: 'Based',
        ru: 'Основан',
    },
    {
        en: 'Considerable',
        ru: 'Значительный',
    },
    {
        en: 'Deprive',
        ru: 'Лишать',
    },
    {
        en: 'Hail',
        ru: 'Град',
    },
    {
        en: 'Liberty',
        ru: 'Свобода',
    },
    {
        en: 'Persist',
        ru: 'Упорствовать',
    },
    {
        en: 'Prayer',
        ru: 'Молитва',
    },
    {
        en: 'Privilege',
        ru: 'Привилегия',
    },
    {
        en: 'Rumour',
        ru: 'Слух',
    },
    {
        en: 'Solely',
        ru: 'Исключительно',
    },
    {
        en: 'Unproven',
        ru: 'Недоказанный',
    },
    {
        en: 'Worthy',
        ru: 'Достойный',
    },
    {
        en: 'Abundance',
        ru: 'Изобилие',
    },
    {
        en: 'Associated',
        ru: 'Связанный',
    },
    {
        en: 'Brand',
        ru: 'Бренд',
    },
    {
        en: 'Contribute',
        ru: 'Пожертвовать',
    },
    {
        en: 'Covered',
        ru: 'Покрытый',
    },
    {
        en: 'Equipped',
        ru: 'Оборудованный',
    },
    {
        en: 'Fund',
        ru: 'Фонд',
    },
    {
        en: 'Initial',
        ru: 'Начальный',
    },
    {
        en: 'Parking',
        ru: 'Парковка',
    },
    {
        en: 'Photography',
        ru: 'Фотография',
    },
    {
        en: 'Prognosis',
        ru: 'Прогноз',
    },
    {
        en: 'Projector',
        ru: 'Проектор',
    },
    {
        en: 'Reluctance',
        ru: 'Нежелание',
    },
    {
        en: 'Tight',
        ru: 'Плотно',
    },
    {
        en: 'Unforeseen',
        ru: 'Непредвиденный',
    },
    {
        en: 'Utterly',
        ru: 'Совершенно',
    },
    {
        en: 'Safety',
        ru: 'Безопасность',
    },
    {
        en: 'Adaptation',
        ru: 'Адаптация',
    },
    {
        en: 'Amazement',
        ru: 'Изумление',
    },
    {
        en: 'Analysis',
        ru: 'Анализ',
    },
    {
        en: 'Attach',
        ru: 'Прикреплять',
    },
    {
        en: 'Bet',
        ru: 'Держать пари',
    },
    {
        en: 'Bureaucracy',
        ru: 'Бюрократия',
    },
    {
        en: 'Cease',
        ru: 'Прекратить',
    },
    {
        en: 'Compassion',
        ru: 'Сострадание',
    },
    {
        en: 'Concerned',
        ru: 'Обеспокоен',
    },
    {
        en: 'Corruption',
        ru: 'Коррупция',
    },
    {
        en: 'Disobedience',
        ru: 'Непослушание',
    },
    {
        en: 'Distinguish',
        ru: 'Отличать',
    },
    {
        en: 'Eventually',
        ru: 'В конце концов',
    },
    {
        en: 'Inequality',
        ru: 'Неравенство',
    },
    {
        en: 'Marvel',
        ru: 'Восхищаться',
    },
    {
        en: 'Object',
        ru: 'Объект',
    },
    {
        en: 'Objection',
        ru: 'Возражение',
    },
    {
        en: 'Rapidity',
        ru: 'Быстрота',
    },
    {
        en: 'Teaching',
        ru: 'Преподавание',
    },
    {
        en: 'Unsurprisingly',
        ru: 'Неудивительно',
    },
    {
        en: 'Wisdom',
        ru: 'Мудрость',
    },
    {
        en: 'Characteristic',
        ru: 'Характерная черта',
    },
    {
        en: 'Dismissal',
        ru: 'Увольнение',
    },
    {
        en: 'Distinguishing',
        ru: 'Отличительный',
    },
    {
        en: 'Doubtful',
        ru: 'Сомнительный',
    },
    {
        en: 'Prone',
        ru: 'Склонный',
    },
    {
        en: 'Scandal',
        ru: 'Скандал',
    },
    {
        en: 'Bribery',
        ru: 'Взточничество',
    },
    {
        en: 'Discourage',
        ru: 'Отговаривать',
    },
    {
        en: 'Dressed',
        ru: 'Одетый',
    },
    {
        en: 'Excitement',
        ru: 'Волнение',
    },
    {
        en: 'Filled',
        ru: 'Заполненный',
    },
    {
        en: 'Intent',
        ru: 'Намерение',
    },
    {
        en: 'Involved',
        ru: 'Вовлеченный',
    },
    {
        en: 'Joy',
        ru: 'Радость',
    },
    {
        en: 'Lady',
        ru: 'Леди',
    },
    {
        en: 'Limit',
        ru: 'Предел',
    },
    {
        en: 'Partial',
        ru: 'Частичный',
    },
    {
        en: 'Puzzled',
        ru: 'Озадаченный',
    },
    {
        en: 'Sphere',
        ru: 'Сфера',
    },
    {
        en: 'Tears',
        ru: 'Слезы',
    },
    {
        en: 'Theft',
        ru: 'Кража',
    },
    {
        en: 'Anger',
        ru: 'Злость',
    },
    {
        en: 'Betray',
        ru: 'Предавать',
    },
    {
        en: 'Cast',
        ru: 'Бросать',
    },
    {
        en: 'Consequent',
        ru: 'Последующий',
    },
    {
        en: 'Court',
        ru: 'Суд',
    },
    {
        en: 'Flooded',
        ru: 'Заваленный',
    },
    {
        en: 'Glance',
        ru: 'Взгляд',
    },
    {
        en: 'Incompetence',
        ru: 'Некомпетентность',
    },
    {
        en: 'Net',
        ru: 'Сеть',
    },
    {
        en: 'Request',
        ru: 'Запрос',
    },
    {
        en: 'Tremble',
        ru: 'Дрожать',
    },
    {
        en: 'Uncontrollably',
        ru: 'Бесконтрольно',
    },
    {
        en: 'Antique',
        ru: 'Античный',
    },
    {
        en: 'Awareness',
        ru: 'Осознание',
    },
    {
        en: 'Budget',
        ru: 'Бюджет',
    },
    {
        en: 'Campaign',
        ru: 'Кампания',
    },
    {
        en: 'Cruelty',
        ru: 'Жестокость',
    },
    {
        en: 'Dedicate',
        ru: 'Посвящать',
    },
    {
        en: 'Detailed',
        ru: 'Детальный',
    },
    {
        en: 'Furnished',
        ru: 'Обставленный',
    },
    {
        en: 'Imprisonment',
        ru: 'Тюремное заключение',
    },
    {
        en: 'Junk',
        ru: 'Нездоровый',
    },
    {
        en: 'Needy',
        ru: 'Нуждающийся',
    },
    {
        en: 'Pension',
        ru: 'Пенсия',
    },
    {
        en: 'Raise',
        ru: 'Повысить, повышение',
    },
    {
        en: 'Reliant',
        ru: 'Уверенный',
    },
    {
        en: 'Reluctant',
        ru: 'Неохотный',
    },
    {
        en: 'Seriousness',
        ru: 'Серьезность',
    },
    {
        en: 'Serve',
        ru: 'Обслуживать',
    },
    {
        en: 'Thorough',
        ru: 'Тщательный',
    },
    {
        en: 'Volunteer',
        ru: 'Доброволец',
    },
    {
        en: 'Art',
        ru: 'Искусство',
    },
    {
        en: 'Defeat',
        ru: 'Поражение',
    },
    {
        en: 'Dissatisfaction',
        ru: 'Неудовлетворенность',
    },
    {
        en: 'Equivalent',
        ru: 'Эквивалент',
    },
    {
        en: 'Incident',
        ru: 'Инцидент',
    },
    {
        en: 'Opposed',
        ru: 'Против',
    },
    {
        en: 'Prepared',
        ru: 'Подготовленный',
    },
    {
        en: 'Thirst',
        ru: 'Жажда',
    },
    {
        en: 'Upbringing',
        ru: 'Воспитание',
    },
    {
        en: 'Acquire',
        ru: 'Приобретать',
    },
    {
        en: 'Condemn',
        ru: 'Осуждать',
    },
    {
        en: 'Debate',
        ru: 'Обсуждение',
    },
    {
        en: 'Eager',
        ru: 'Стремящийся, желающий',
    },
    {
        en: 'Guidance',
        ru: 'Руководство',
    },
    {
        en: 'Hint',
        ru: 'Намек',
    },
    {
        en: 'Innocence',
        ru: 'Невинность',
    },
    {
        en: 'Necessity',
        ru: 'Необходимость',
    },
    {
        en: 'Newsletter',
        ru: 'Новостная рассылка',
    },
    {
        en: 'Passion',
        ru: 'Страсть',
    },
    {
        en: 'Peace',
        ru: 'Мир',
    },
    {
        en: 'Position',
        ru: 'Позиция',
    },
    {
        en: 'Prudence',
        ru: 'Благоразумие',
    },
    {
        en: 'Qualified',
        ru: 'Квалифицированный',
    },
    {
        en: 'Subscribed',
        ru: 'Подписан',
    },
    {
        en: 'Tone',
        ru: 'Тон',
    },
    {
        en: 'Vice versa',
        ru: 'Наоборот',
    },
    {
        en: 'Accompany',
        ru: 'Сопровождать',
    },
    {
        en: 'Cartoon',
        ru: 'Мультфильм',
    },
    {
        en: 'Champion',
        ru: 'Чемпион',
    },
    {
        en: 'Commission',
        ru: 'Комиссия',
    },
    {
        en: 'Disco',
        ru: 'Дискотека',
    },
    {
        en: 'Dishwasher',
        ru: 'Посудомоечная машина',
    },
    {
        en: 'Divorce',
        ru: 'Развод',
    },
    {
        en: 'Error',
        ru: 'Ошибка',
    },
    {
        en: 'Traffic jam',
        ru: 'Пробка',
    },
    {
        en: 'Photographer',
        ru: 'Фотограф',
    },
    {
        en: 'Playground',
        ru: 'Игровая площадка',
    },
    {
        en: 'Precaution',
        ru: 'Предосторожность',
    },
    {
        en: 'Stuck',
        ru: 'Застрять',
    },
    {
        en: 'Traffic',
        ru: 'Движение',
    },
    {
        en: 'Consideration',
        ru: 'Рассмотрение',
    },
    {
        en: 'Consult',
        ru: 'Консультировать',
    },
    {
        en: 'Eradicate',
        ru: 'Искоренить',
    },
    {
        en: 'Fee',
        ru: 'Взнос',
    },
    {
        en: 'Hastily',
        ru: 'Поспешно',
    },
    {
        en: 'Illiteracy',
        ru: 'Неграмотность',
    },
    {
        en: 'Minimize',
        ru: 'Минимизировать',
    },
    {
        en: 'Refrigerator',
        ru: 'Холодильник',
    },
    {
        en: 'Spelling',
        ru: 'Правописание',
    },
    {
        en: 'Timetable',
        ru: 'Расписание',
    },
    {
        en: 'Troops',
        ru: 'Войска',
    },
    {
        en: 'Washing machine',
        ru: 'Стиральная машина',
    },
    {
        en: 'Access',
        ru: 'Доступ',
    },
    {
        en: 'Beyond',
        ru: 'За',
    },
    {
        en: 'Generally',
        ru: 'В общем',
    },
    {
        en: 'Irrelevant',
        ru: 'Неуместный',
    },
    {
        en: 'Reckon',
        ru: 'Считать',
    },
    {
        en: 'Regardless',
        ru: 'Regardless',
    },
    {
        en: 'self-education',
        ru: 'Самообразование',
    },
    {
        en: 'Coincidence',
        ru: 'Совпадение',
    },
    {
        en: 'Firstly',
        ru: 'Во-первых',
    },
    {
        en: 'Fluency',
        ru: 'Беглость',
    },
    {
        en: 'Overestimate',
        ru: 'Переоценивать',
    },
    {
        en: 'Ridiculously',
        ru: 'Смехотворно',
    },
    {
        en: 'Secondly',
        ru: 'Во-вторых',
    },
    {
        en: 'Sincerely',
        ru: 'Искренне',
    },
    {
        en: 'Crucial',
        ru: 'Ключевой',
    },
    {
        en: 'Illusion',
        ru: 'Иллюзия',
    },
    {
        en: 'Unsuccessful',
        ru: 'Неудачный',
    },
    {
        en: 'Worthwhile',
        ru: 'Стоит',
    },
    {
        en: 'Definite',
        ru: 'Определенный',
    },
    {
        en: 'Moreover',
        ru: 'Более того',
    },
    {
        en: 'Part-time',
        ru: 'Неполный рабочий день',
    },
    {
        en: 'Popularity',
        ru: 'Популярность',
    },
    {
        en: 'Sensibly',
        ru: 'Разумно',
    },
    {
        en: 'Admit',
        ru: 'Признавать',
    },
    {
        en: 'Advertising',
        ru: 'Реклама',
    },
    {
        en: 'Beneficial',
        ru: 'Выгодный',
    },
    {
        en: 'Criteria',
        ru: 'Критерий',
    },
    {
        en: 'Definition',
        ru: 'Определение',
    },
    {
        en: 'Desirable',
        ru: 'Желательный',
    },
    {
        en: 'Desire',
        ru: 'Желание',
    },
    {
        en: 'Entertainment',
        ru: 'Развлечение',
    },
    {
        en: 'Invention',
        ru: 'Изобретение',
    },
    {
        en: 'Investment',
        ru: 'Инвестиция',
    },
    {
        en: 'License',
        ru: 'Лицензия',
    },
    {
        en: 'Lover',
        ru: 'Любовник',
    },
    {
        en: 'Monotonous',
        ru: 'Монотонный',
    },
    {
        en: 'Perceive',
        ru: 'Воспринимать',
    },
    {
        en: 'Radically',
        ru: 'Радикально',
    },
    {
        en: 'Relate',
        ru: 'Относиться',
    },
    {
        en: 'Barrier',
        ru: 'Барьер',
    },
    {
        en: 'Distract',
        ru: 'Отвлекать',
    },
    {
        en: 'Ecologist',
        ru: 'Эколог',
    },
    {
        en: 'Entirely',
        ru: 'Совсем',
    },
    {
        en: 'Global warming',
        ru: 'Глобальное потепление',
    },
    {
        en: 'Nutrition',
        ru: 'Питание',
    },
    {
        en: 'Overweight',
        ru: 'Избыточный вес',
    },
    {
        en: 'Pose',
        ru: 'Представляет',
    },
    {
        en: 'Psychology',
        ru: 'Психология',
    },
    {
        en: 'Self-development',
        ru: 'Саморазвитие',
    },
    {
        en: 'Stunning',
        ru: 'Потрясяющий',
    },
    {
        en: 'Swimmer',
        ru: 'Пловец',
    },
    {
        en: 'Technological',
        ru: 'Технологический',
    },
    {
        en: 'Theoretically',
        ru: 'Теоретически',
    },
    {
        en: 'Widespread',
        ru: 'Широко распространенный',
    },
    {
        en: 'Basically',
        ru: 'В принципе',
    },
    {
        en: 'Controversial',
        ru: 'Спорный',
    },
    {
        en: 'Deceptive',
        ru: 'Обманчивый',
    },
    {
        en: 'Disability',
        ru: 'Инвалидность',
    },
    {
        en: 'Drop',
        ru: 'Бросать, оставлять',
    },
    {
        en: 'Excuse',
        ru: 'Оправдание',
    },
    {
        en: 'Fascinating',
        ru: 'Очаровательный',
    },
    {
        en: 'Probability',
        ru: 'Вероятность',
    },
    {
        en: 'Tool',
        ru: 'Инструмент',
    },
    {
        en: 'Yeah',
        ru: 'Да',
    },
    {
        en: 'Background',
        ru: 'Фон',
    },
    {
        en: 'Collocation',
        ru: 'Словосочетание',
    },
    {
        en: 'Concerning',
        ru: 'Касающийся',
    },
    {
        en: 'Contraction',
        ru: 'Сокращение',
    },
    {
        en: 'Digest',
        ru: 'Переваривать',
    },
    {
        en: 'Enjoyable',
        ru: 'Приятный',
    },
    {
        en: 'Exaggeration',
        ru: 'Преувеличение',
    },
    {
        en: 'Idiom',
        ru: 'Идиома',
    },
    {
        en: 'Load',
        ru: 'Загружать',
    },
    {
        en: 'Mass media',
        ru: 'СМИ',
    },
    {
        en: 'Nationality',
        ru: 'Национальность',
    },
    {
        en: 'Needless',
        ru: 'Излишне',
    },
    {
        en: 'Non-native speaker',
        ru: 'Не носитель языка',
    },
    {
        en: 'Phrasal verb',
        ru: 'Фразовый глагол',
    },
    {
        en: 'Precise',
        ru: 'Точный',
    },
    {
        en: 'Precisely',
        ru: 'Точно',
    },
    {
        en: 'Priority',
        ru: 'Приоритет',
    },
    {
        en: 'Shopaholic',
        ru: 'Шопоголик',
    },
    {
        en: 'Undeniable',
        ru: 'Бесспорный',
    },
    {
        en: 'Adapted',
        ru: 'Адаптированный',
    },
    {
        en: 'Agenda',
        ru: 'Повестка дня',
    },
    {
        en: 'Ahead',
        ru: 'Впереди',
    },
    {
        en: 'Clarify',
        ru: 'Прояснить',
    },
    {
        en: 'Comparison',
        ru: 'Сравнение',
    },
    {
        en: 'Ideally',
        ru: 'В идеале',
    },
    {
        en: 'Japanese',
        ru: 'Японский',
    },
    {
        en: 'Justly',
        ru: 'Справедливо',
    },
    {
        en: 'Miracle',
        ru: 'Чудо',
    },
    {
        en: 'Problematic',
        ru: 'Проблематичный',
    },
    {
        en: 'Programming',
        ru: 'Программировние',
    },
    {
        en: 'Punishment',
        ru: 'Наказание',
    },
    {
        en: 'Simplified',
        ru: 'Упрощенный',
    },
    {
        en: 'Tendency',
        ru: 'Тенденция',
    },
    {
        en: 'Understandable',
        ru: 'Понятный',
    },
    {
        en: 'Weakness',
        ru: 'Слабость',
    },
    {
        en: 'Adjective',
        ru: 'Прилагательное',
    },
    {
        en: 'Adverb',
        ru: 'Наречие',
    },
    {
        en: 'Bluntly',
        ru: 'Прямо, резко',
    },
    {
        en: 'Cloud',
        ru: 'Облако',
    },
    {
        en: 'Commonly',
        ru: 'Часто',
    },
    {
        en: 'Competitive',
        ru: 'Конкурентный',
    },
    {
        en: 'Consequently',
        ru: 'Следовательно',
    },
    {
        en: 'Contrast',
        ru: 'Отличие',
    },
    {
        en: 'Disagreement',
        ru: 'Разногласие',
    },
    {
        en: 'Employer',
        ru: 'Работодатель',
    },
    {
        en: 'Evidence',
        ru: 'Свидетельство',
    },
    {
        en: 'Furthermore',
        ru: 'Более того',
    },
    {
        en: 'Influential',
        ru: 'Влиятельный',
    },
    {
        en: 'Kindergarten',
        ru: 'Дееский сад',
    },
    {
        en: 'Limited',
        ru: 'Ограниченный',
    },
    {
        en: 'Linking words',
        ru: 'Связывающие слова',
    },
    {
        en: 'Lion',
        ru: 'Лев',
    },
    {
        en: 'Mildly',
        ru: 'Мягко',
    },
    {
        en: 'Minus',
        ru: 'Минус',
    },
    {
        en: 'Mouth',
        ru: 'Рот',
    },
    {
        en: 'Noun',
        ru: 'Существительное',
    },
    {
        en: 'In a nutshell',
        ru: 'В двух словах',
    },
    {
        en: 'Plus',
        ru: 'Плюс',
    },
    {
        en: 'Space',
        ru: 'Пространство',
    },
    {
        en: 'Stuff',
        ru: 'Вещи',
    },
    {
        en: 'Tip',
        ru: 'Совет',
    },
    {
        en: 'Unlucky',
        ru: 'Неудачный',
    },
    {
        en: 'Unnoticed',
        ru: 'Незамеченный',
    },
    {
        en: 'Wisely',
        ru: 'Мудро',
    },
    {
        en: 'Debt',
        ru: 'Долг',
    },
    {
        en: 'Embarrassing',
        ru: 'Неловкий',
    },
    {
        en: 'Enrol',
        ru: 'Записаться',
    },
    {
        en: 'Mortgage',
        ru: 'Ипотека',
    },
    {
        en: 'Optimist',
        ru: 'Оптимист',
    },
    {
        en: 'Prove',
        ru: 'Доказывать',
    },
    {
        en: 'Revise',
        ru: 'Пересматривать',
    },
    {
        en: 'Visible',
        ru: 'Видимый',
    },
    {
        en: 'Bracelet',
        ru: 'Браслет',
    },
    {
        en: 'Certificate',
        ru: 'Сертификат',
    },
    {
        en: 'Correction',
        ru: 'Исправление',
    },
    {
        en: 'Disgusting',
        ru: 'Отвратительный',
    },
    {
        en: 'Full-time',
        ru: 'На полную занятость',
    },
    {
        en: 'Helicopter',
        ru: 'Вертолет',
    },
    {
        en: 'Mattress',
        ru: 'Матрас',
    },
    {
        en: 'Personnel',
        ru: 'Персонал',
    },
    {
        en: 'Proper',
        ru: 'Правильный',
    },
    {
        en: 'Review',
        ru: 'Обзор',
    },
    {
        en: 'Souvenir',
        ru: 'Сувенир',
    },
    {
        en: 'Sympathetic',
        ru: 'Сочувствующий',
    },
    {
        en: 'Tremendous',
        ru: 'Огромный',
    },
    {
        en: 'Waterfall',
        ru: 'Водопад',
    },
    {
        en: 'Accessory',
        ru: 'Аксессуар',
    },
    {
        en: 'Amount',
        ru: 'Количество',
    },
    {
        en: 'Appliance',
        ru: 'Прибор',
    },
    {
        en: 'Blogging',
        ru: 'Блоггинг',
    },
    {
        en: 'Bound to',
        ru: 'Обязательно, обречен на',
    },
    {
        en: 'Compensation',
        ru: 'Компенсация',
    },
    {
        en: 'Fairly',
        ru: 'Довольно',
    },
    {
        en: 'Harsh',
        ru: 'Суровый',
    },
    {
        en: 'Knit',
        ru: 'Вязать',
    },
    {
        en: 'Likely',
        ru: 'Скорее всего',
    },
    {
        en: 'Qualification',
        ru: 'Квалификация',
    },
    {
        en: 'Revolutionary',
        ru: 'Революционный',
    },
    {
        en: 'Simultaneously',
        ru: 'Одновременно',
    },
    {
        en: 'Wealthy',
        ru: 'Состоятельный',
    },
    {
        en: 'Afterwards',
        ru: 'После этого',
    },
    {
        en: 'Investigate',
        ru: 'Исследовать',
    },
    {
        en: 'Responsibility',
        ru: 'Обязанность',
    },
    {
        en: 'Subscriber',
        ru: 'Подписчик',
    },
    {
        en: 'Tense',
        ru: 'Время',
    },
    {
        en: 'Title',
        ru: 'Заголовок',
    },
    {
        en: 'Turkey',
        ru: 'Турция',
    },
    {
        en: 'Unpredictable',
        ru: 'Непредсказуемый',
    },
    {
        en: 'Stay',
        ru: 'Пребывание',
    },
    {
        en: 'Historic',
        ru: 'Исторический',
    },
    {
        en: 'Conscious',
        ru: 'Осознающий',
    },
    {
        en: 'Delivery',
        ru: 'Доставка',
    },
    {
        en: 'Efficiency',
        ru: 'Эффективность',
    },
    {
        en: 'Electric',
        ru: 'Электрический',
    },
    {
        en: 'Exhibition',
        ru: 'Выставка',
    },
    {
        en: 'Marvellous',
        ru: 'Великолепный',
    },
    {
        en: 'Sheet',
        ru: 'Лист',
    },
    {
        en: 'Transfer',
        ru: 'Переводить',
    },
    {
        en: 'Moving',
        ru: 'Трогательный',
    },
    {
        en: 'Applaud',
        ru: 'Аплодировать',
    },
    {
        en: 'Atrocious',
        ru: 'Отвратительный',
    },
    {
        en: 'Band',
        ru: 'Группа',
    },
    {
        en: 'Basket',
        ru: 'Корзина',
    },
    {
        en: 'Bless',
        ru: 'Благословлять',
    },
    {
        en: 'Ceremony',
        ru: 'Церемония',
    },
    {
        en: 'Christian',
        ru: 'Христианин',
    },
    {
        en: 'Christianity',
        ru: 'Христианство',
    },
    {
        en: 'Cock',
        ru: 'Петух',
    },
    {
        en: 'Convert',
        ru: 'Конвертировать, преобразовать',
    },
    {
        en: 'Cow',
        ru: 'Корова',
    },
    {
        en: 'Dare',
        ru: 'Осмеливаться',
    },
    {
        en: 'Dinosaur',
        ru: 'Динозавр',
    },
    {
        en: 'Duck',
        ru: 'Утка',
    },
    {
        en: 'Farmer',
        ru: 'Фермер',
    },
    {
        en: 'Fifth',
        ru: 'Пятый',
    },
    {
        en: 'Fishing',
        ru: 'Рыбалка',
    },
    {
        en: 'Goose',
        ru: 'Гусь',
    },
    {
        en: 'Goat',
        ru: 'Козел',
    },
    {
        en: 'Guide',
        ru: 'Сопровождать, направлять',
    },
    {
        en: 'Hen',
        ru: 'Курица',
    },
    {
        en: 'Humiliate',
        ru: 'Унижать',
    },
    {
        en: 'Idolize',
        ru: 'Боготворить',
    },
    {
        en: 'Initially',
        ru: 'Первоначально',
    },
    {
        en: 'Insult',
        ru: 'Оскорблять',
    },
    {
        en: 'Item',
        ru: 'Пункт',
    },
    {
        en: 'Kilometre',
        ru: 'Километр',
    },
    {
        en: 'Madness',
        ru: 'Безумие',
    },
    {
        en: 'Miraculously',
        ru: 'Чудом',
    },
    {
        en: 'Optimize',
        ru: 'Оптимизировать',
    },
    {
        en: 'Percentage',
        ru: 'Процент',
    },
    {
        en: 'Reflect',
        ru: 'Отражать',
    },
    {
        en: 'Rugby',
        ru: 'Рэгби',
    },
    {
        en: 'Sheep',
        ru: 'Овца',
    },
    {
        en: 'Truck',
        ru: 'Грузовик',
    },
    {
        en: 'Whatever',
        ru: 'Что бы ни',
    },
    {
        en: 'Whisper',
        ru: 'Шептать',
    },
    {
        en: 'Adopt',
        ru: 'Усыновить, удочерить',
    },
    {
        en: 'Arrange',
        ru: 'Договориться',
    },
    {
        en: 'Besides',
        ru: 'Кроме того',
    },
    {
        en: 'Bookcase',
        ru: 'Книжный шкаф',
    },
    {
        en: 'Brain',
        ru: 'Мозг',
    },
    {
        en: 'CD',
        ru: 'Компакт-диск',
    },
    {
        en: 'Civil',
        ru: 'Гражданский',
    },
    {
        en: 'Confess',
        ru: 'Признаваться',
    },
    {
        en: 'Convey',
        ru: 'Передавать, доносить',
    },
    {
        en: 'Eighth',
        ru: 'Восьмой',
    },
    {
        en: 'Explore',
        ru: 'Исследовать',
    },
    {
        en: 'Finance',
        ru: 'Финансы',
    },
    {
        en: 'Goal',
        ru: 'Цель',
    },
    {
        en: 'Granddaughter',
        ru: 'Внучка',
    },
    {
        en: 'Grandson',
        ru: 'Внук',
    },
    {
        en: 'Inclusive',
        ru: 'Включено',
    },
    {
        en: 'Legitimate',
        ru: 'Законный',
    },
    {
        en: 'Male',
        ru: 'Мужской',
    },
    {
        en: 'Minimum',
        ru: 'Минимум, минимальный',
    },
    {
        en: 'Mommy',
        ru: 'Мамочка',
    },
    {
        en: 'Paste',
        ru: 'Вставить',
    },
    {
        en: 'Pink',
        ru: 'Розовый',
    },
    {
        en: 'Prescribe',
        ru: 'Прописать',
    },
    {
        en: 'Ruble',
        ru: 'Рубль',
    },
    {
        en: 'Sand',
        ru: 'Песок',
    },
    {
        en: 'Sore',
        ru: 'Больной, воспаленный',
    },
    {
        en: 'Spread',
        ru: 'Распространяться',
    },
    {
        en: 'Structure',
        ru: 'Структура',
    },
    {
        en: 'Target',
        ru: 'Цель',
    },
    {
        en: 'Throat',
        ru: 'Горло',
    },
    {
        en: 'Tear',
        ru: 'Рвать',
    },
    {
        en: 'Undo',
        ru: 'Расстегнуть',
    },
    {
        en: 'Wanna',
        ru: 'Хотеть',
    },
    {
        en: 'Beetroot',
        ru: 'Свекла',
    },
    {
        en: 'Bend',
        ru: 'Сгибать',
    },
    {
        en: 'Carrot',
        ru: 'Морковь',
    },
    {
        en: 'Connect',
        ru: 'Соединять',
    },
    {
        en: 'Crew',
        ru: 'Экипаж',
    },
    {
        en: 'Declare',
        ru: 'Объявлять',
    },
    {
        en: 'Decorate',
        ru: 'Украшать',
    },
    {
        en: 'Dialogue',
        ru: 'Диалог',
    },
    {
        en: 'Encourage',
        ru: 'Поощрять, воодушевлять',
    },
    {
        en: 'Eraser',
        ru: 'Ластик',
    },
    {
        en: 'Fraud',
        ru: 'Мошенничество',
    },
    {
        en: 'Google',
        ru: 'Гуглить, искать в интернете',
    },
    {
        en: 'Involve',
        ru: 'Вовлекать',
    },
    {
        en: 'Location',
        ru: 'Расположение',
    },
    {
        en: 'Mix',
        ru: 'Смешивать',
    },
    {
        en: 'Moderately',
        ru: 'Умеренно',
    },
    {
        en: 'Moderation',
        ru: 'Умеренность',
    },
    {
        en: 'Onion',
        ru: 'Лук',
    },
    {
        en: 'Overtake',
        ru: 'Обгонять',
    },
    {
        en: 'Panic',
        ru: 'Паника, паниковать',
    },
    {
        en: 'Permit',
        ru: 'Разрешать',
    },
    {
        en: 'Prosecute',
        ru: 'Преследовать в судебном порядке',
    },
    {
        en: 'Rob',
        ru: 'Грабить',
    },
    {
        en: 'Rub',
        ru: 'Стирать',
    },
    {
        en: 'Select',
        ru: 'Выбирать',
    },
    {
        en: 'Shoot',
        ru: 'Стрелять',
    },
    {
        en: 'Bible',
        ru: 'Библия',
    },
    {
        en: 'Complete',
        ru: 'Соревноваться',
    },
    {
        en: 'Cucumber',
        ru: 'Огурец',
    },
    {
        en: 'Diligence',
        ru: 'Старательность',
    },
    {
        en: 'Dozen',
        ru: 'Дюжина',
    },
    {
        en: 'Erase',
        ru: 'Стирать',
    },
    {
        en: 'Expand',
        ru: 'Расширять',
    },
    {
        en: 'Extend',
        ru: 'Тянуться',
    },
    {
        en: 'Fulfil',
        ru: 'Выполнять',
    },
    {
        en: 'Modesty',
        ru: 'Скромность',
    },
    {
        en: 'Neck',
        ru: 'Шея',
    },
    {
        en: 'Obtain',
        ru: 'Получать',
    },
    {
        en: 'Peninsula',
        ru: 'Полуостров',
    },
    {
        en: 'Postcard',
        ru: 'Открытка',
    },
    {
        en: 'Profoundly',
        ru: 'Глубоко',
    },
    {
        en: 'Rapidly',
        ru: 'Быстро',
    },
    {
        en: 'Readiness',
        ru: 'Готовность',
    },
    {
        en: 'Relevant',
        ru: 'Актуальный',
    },
    {
        en: 'Remove',
        ru: 'Удалять',
    },
    {
        en: 'Resell',
        ru: 'Перепродавать',
    },
    {
        en: 'Righteous',
        ru: 'Праведный',
    },
    {
        en: 'Scarf',
        ru: 'Шарф',
    },
    {
        en: 'Surround',
        ru: 'Окружать',
    },
    {
        en: 'Tomato',
        ru: 'Помидор',
    },
    {
        en: 'United',
        ru: 'Удиный, объединенный',
    },
    {
        en: 'Wheel',
        ru: 'Колесо',
    },
    {
        en: 'Worship',
        ru: 'Поклоняться',
    },
    {
        en: 'Idealize',
        ru: 'Идеализировать',
    },
    {
        en: 'Bench',
        ru: 'Скамья',
    },
    {
        en: 'Emphasize',
        ru: 'Подчеркнуть',
    },
    {
        en: 'Fry',
        ru: 'Жарить',
    },
    {
        en: 'Including',
        ru: 'Включая',
    },
    {
        en: 'Inefficiency',
        ru: 'Неэффективность',
    },
    {
        en: 'Liquid',
        ru: 'Жидкость',
    },
    {
        en: 'Merry',
        ru: 'Счастливый',
    },
    {
        en: 'Nation',
        ru: 'Нация',
    },
    {
        en: 'Platform',
        ru: 'Платформа',
    },
    {
        en: 'Seventh',
        ru: 'Седьмой',
    },
    {
        en: 'Significance',
        ru: 'Значимость',
    },
    {
        en: 'Sixth',
        ru: 'Шестой',
    },
    {
        en: 'Soap',
        ru: 'Мыло',
    },
    {
        en: 'Unkind',
        ru: 'Недобрый',
    },
    {
        en: 'Unluckily',
        ru: 'К несчастью',
    },
    {
        en: 'Virtually',
        ru: 'Фактически',
    },
    {
        en: 'Wage',
        ru: 'Зарплата',
    },
    {
        en: 'Fire',
        ru: 'Увольнять',
    },
    {
        en: 'Agent',
        ru: 'Агент',
    },
    {
        en: 'Conclude',
        ru: 'Заключать',
    },
    {
        en: 'Hill',
        ru: 'Холм',
    },
    {
        en: 'Madam',
        ru: 'Мадам',
    },
    {
        en: 'Media',
        ru: 'СМИ',
    },
    {
        en: 'Muscles',
        ru: 'Мышцы',
    },
    {
        en: 'Nineteenth',
        ru: 'Девятнадцатый',
    },
    {
        en: 'Notify',
        ru: 'Уведомлять',
    },
    {
        en: 'Occur',
        ru: 'Происходить',
    },
    {
        en: 'Patriot',
        ru: 'Патриот',
    },
    {
        en: 'Presidential',
        ru: 'Президентский',
    },
    {
        en: 'Pull',
        ru: 'Тащить',
    },
    {
        en: 'Regard',
        ru: 'Считать',
    },
    {
        en: 'Reporter',
        ru: 'Репортер',
    },
    {
        en: 'Resist',
        ru: 'Сопротивляться',
    },
    {
        en: 'Status',
        ru: 'Статус',
    },
    {
        en: 'Submit',
        ru: 'Подавать',
    },
    {
        en: 'Telephone',
        ru: 'Телефон',
    },
    {
        en: 'Temptation',
        ru: 'Искушение',
    },
    {
        en: 'Terminate',
        ru: 'Заканчивать',
    },
    {
        en: 'Terrific',
        ru: 'Потрясающий',
    },
    {
        en: 'Wow',
        ru: 'Ух ты',
    },
    {
        en: 'Water',
        ru: 'Поливать',
    },
    {
        en: 'Activity',
        ru: 'Деятельность',
    },
    {
        en: 'Authority',
        ru: 'Власть',
    },
    {
        en: 'Broadcast',
        ru: 'Тренслировать',
    },
    {
        en: 'Chewing gum',
        ru: 'Жевательная резинка',
    },
    {
        en: 'Curious',
        ru: 'Любопытный',
    },
    {
        en: 'Diary',
        ru: 'Дневник',
    },
    {
        en: 'Exclude',
        ru: 'Исключать',
    },
    {
        en: 'Grammatical',
        ru: 'Грамматический',
    },
    {
        en: 'Honey',
        ru: 'Мёд',
    },
    {
        en: 'Identity',
        ru: 'Идентифицировать',
    },
    {
        en: 'Imitate',
        ru: 'Имитировать',
    },
    {
        en: 'Inappropriate',
        ru: 'Несоответствующий',
    },
    {
        en: 'Mislead',
        ru: 'Ввести в заблуждение',
    },
    {
        en: 'Modify',
        ru: 'Модифицировать',
    },
    {
        en: 'Motherland',
        ru: 'Родина',
    },
    {
        en: 'Muslim',
        ru: 'Мусульманин',
    },
    {
        en: 'Oven',
        ru: 'Духовка',
    },
    {
        en: 'Pan',
        ru: 'Кастрюля',
    },
    {
        en: 'Per',
        ru: 'В',
    },
    {
        en: 'Pour',
        ru: 'Наливать',
    },
    {
        en: 'Prize',
        ru: 'Приз',
    },
    {
        en: 'Propose',
        ru: 'Предложить',
    },
    {
        en: 'Reader',
        ru: 'Читатель',
    },
    {
        en: 'Splitting',
        ru: 'Сильный, раскалывающий',
    },
    {
        en: 'Swear',
        ru: 'Клясться, ругаться',
    },
    {
        en: 'Twentieth',
        ru: 'Двадцатый',
    },
    {
        en: 'Twentieth',
        ru: 'Двадцатый',
    },
    {
        en: 'Wherever',
        ru: 'Где бы ни',
    },
    {
        en: 'Yawn',
        ru: 'Зевать',
    },
    {
        en: 'Aeroplane',
        ru: 'Самолет',
    },
    {
        en: 'Approvingly',
        ru: 'Одобрительно',
    },
    {
        en: 'Backpack',
        ru: 'Рюкзак',
    },
    {
        en: 'Candle',
        ru: 'Свеча',
    },
    {
        en: 'Cheerfully',
        ru: 'Весело',
    },
    {
        en: 'Cooperate',
        ru: 'Сотрудничать',
    },
    {
        en: 'Correspondence',
        ru: 'Переписка',
    },
    {
        en: 'Fourth',
        ru: 'Четвертый',
    },
    {
        en: 'Hesitate',
        ru: 'Колебаться',
    },
    {
        en: 'Imply',
        ru: 'Означать',
    },
    {
        en: 'Justify',
        ru: 'Оправдывать',
    },
    {
        en: 'King',
        ru: 'Король',
    },
    {
        en: 'Knell',
        ru: 'Опускаться на колени',
    },
    {
        en: 'Maintain',
        ru: 'Поддерживать',
    },
    {
        en: 'Ninth',
        ru: 'Девятый',
    },
    {
        en: 'Nod',
        ru: 'Кивать',
    },
    {
        en: 'Rush',
        ru: 'Спешить',
    },
    {
        en: 'Sacrifice',
        ru: 'Жертвовать',
    },
    {
        en: 'Sadden',
        ru: 'Печалить',
    },
    {
        en: 'Scale',
        ru: 'Весы',
    },
    {
        en: 'Scare',
        ru: 'Пугать',
    },
    {
        en: 'Tenth',
        ru: 'Десятый',
    },
    {
        en: 'Unnaturally',
        ru: 'Неестественно',
    },
    {
        en: 'Violate',
        ru: 'Нарушать',
    },
    {
        en: 'Means',
        ru: 'Средства',
    },
    {
        en: 'Rule',
        ru: 'Править',
    },
    {
        en: 'Clothing',
        ru: 'Одежда',
    },
    {
        en: 'Bone',
        ru: 'Кость',
    },
    {
        en: 'Coast',
        ru: 'Берег',
    },
    {
        en: 'Congress',
        ru: 'Конгресс',
    },
    {
        en: 'Convince',
        ru: 'Убеждать',
    },
    {
        en: 'Cough',
        ru: 'Кашель',
    },
    {
        en: 'Development',
        ru: 'Развитие',
    },
    {
        en: 'Exclaim',
        ru: 'Восклицать',
    },
    {
        en: 'Federal',
        ru: 'Федеральный',
    },
    {
        en: 'Formula',
        ru: 'Формула',
    },
    {
        en: 'Gonna',
        ru: 'Собираться',
    },
    {
        en: 'Indicate',
        ru: 'Указывать',
    },
    {
        en: 'Lean',
        ru: 'Наклоняться',
    },
    {
        en: 'Omelette',
        ru: 'Омлет',
    },
    {
        en: 'Promotion',
        ru: 'Продвижение',
    },
    {
        en: 'Recognize',
        ru: 'Узнавать',
    },
    {
        en: 'Refugee',
        ru: 'Беженец',
    },
    {
        en: 'Semester',
        ru: 'Семестр',
    },
    {
        en: 'Signal',
        ru: 'Сигнал',
    },
    {
        en: 'Transform',
        ru: 'Превращаться',
    },
    {
        en: 'Vomit',
        ru: 'Рвать, тошнить',
    },
    {
        en: 'Wood',
        ru: 'Дерево',
    },
    {
        en: 'Talk show',
        ru: 'Ток-шоу',
    },
    {
        en: 'Agility',
        ru: 'Ловкость',
    },
    {
        en: 'Association',
        ru: 'Ассоциация',
    },
    {
        en: 'Berry',
        ru: 'Ягода',
    },
    {
        en: 'Bomb',
        ru: 'Бомба',
    },
    {
        en: 'Camp',
        ru: 'Лагерь',
    },
    {
        en: 'Category',
        ru: 'Категория',
    },
    {
        en: 'Clown',
        ru: 'Клоун',
    },
    {
        en: 'Collection',
        ru: 'Коллекция',
    },
    {
        en: 'Combine',
        ru: 'Совмещать',
    },
    {
        en: 'Communication',
        ru: 'Общение',
    },
    {
        en: 'Confiscate',
        ru: 'Конфисковать',
    },
    {
        en: 'Defend',
        ru: 'Защищать',
    },
    {
        en: 'Endurance',
        ru: 'Выносливость',
    },
    {
        en: 'Establish',
        ru: 'Основывать, создавать',
    },
    {
        en: 'Expire',
        ru: 'Истекать',
    },
    {
        en: 'Explode',
        ru: 'Взрывать',
    },
    {
        en: 'Female',
        ru: 'Женский',
    },
    {
        en: 'Flash',
        ru: 'Вспышка',
    },
    {
        en: 'Force',
        ru: 'Вынуждать',
    },
    {
        en: 'Gather',
        ru: 'Собирать',
    },
    {
        en: 'Geography',
        ru: 'География',
    },
    {
        en: 'Humiliating',
        ru: 'Унизительный',
    },
    {
        en: 'Insert',
        ru: 'Вставлять',
    },
    {
        en: 'Locate',
        ru: 'Разместить',
    },
    {
        en: 'Mushroom',
        ru: 'Гриб',
    },
    {
        en: 'Nick',
        ru: 'Ник',
    },
    {
        en: 'Obey',
        ru: 'Подчиняться',
    },
    {
        en: 'Okay',
        ru: 'Окей',
    },
    {
        en: 'Practice',
        ru: 'Практика',
    },
    {
        en: 'Promote',
        ru: 'Продвигать',
    },
    {
        en: 'Railway station',
        ru: 'Железнодорожная станция',
    },
    {
        en: 'Resign',
        ru: 'Уходить в отставку',
    },
    {
        en: 'Shake',
        ru: 'Трясти',
    },
    {
        en: 'Specifically',
        ru: 'Специально',
    },
    {
        en: 'Speechless',
        ru: 'Немой',
    },
    {
        en: 'Stretching',
        ru: 'Растяжка',
    },
    {
        en: 'Technique',
        ru: 'Техника',
    },
    {
        en: 'Terrorism',
        ru: 'Терроризм',
    },
    {
        en: 'Trial',
        ru: 'Пробный',
    },
    {
        en: 'Vast',
        ru: 'Оромный, обширный',
    },
    {
        en: 'Zebra',
        ru: 'Зебра',
    },
    {
        en: 'End',
        ru: 'Заканчивать, кончаться',
    },
    {
        en: 'Pick up',
        ru: 'Осваивать',
    },
    {
        en: 'Face up to',
        ru: 'Принять, смириться с',
    },
    {
        en: 'Come up with',
        ru: 'Прийти в голову',
    },
    {
        en: 'Liven up',
        ru: 'Оживить',
    },
    {
        en: 'Pick up on',
        ru: 'Улавливать',
    },
    {
        en: 'Pull in',
        ru: 'Зарабатывать, привлекать',
    },
    {
        en: 'Own up',
        ru: 'Признаться',
    },
    {
        en: 'Get back to',
        ru: 'Вернуться к',
    },
    {
        en: 'Dawn on',
        ru: 'Осенить',
    },
    {
        en: 'Cling to',
        ru: 'Цепляться за',
    },
    {
        en: 'Take to',
        ru: 'Начинать',
    },
    {
        en: 'Bank on',
        ru: 'Полагаться на',
    },
    {
        en: 'Lay off',
        ru: 'Увольнять',
    },
    {
        en: 'Feel up to',
        ru: 'Хотеть',
    },
    {
        en: 'Mull over',
        ru: 'обдумывать',
    },
    {
        en: 'Churn out',
        ru: 'Выпускать (о продукции)',
    },
    {
        en: 'Accomplishment',
        ru: 'Достижение',
    },
    {
        en: 'Anxiety',
        ru: 'Тревога',
    },
    {
        en: 'Deceit',
        ru: 'Обман',
    },
    {
        en: 'Drastic',
        ru: 'Решительный',
    },
    {
        en: 'Gradually',
        ru: 'Постепенно',
    },
    {
        en: 'Identical',
        ru: 'Идентичный',
    },
    {
        en: 'Instantly',
        ru: 'Мгновенно',
    },
    {
        en: 'Nervousness',
        ru: 'Нервозность',
    },
    {
        en: 'Prolific',
        ru: 'Продовитый',
    },
    {
        en: 'Undeniably',
        ru: 'Бесспорно',
    },
    {
        en: 'Look up',
        ru: 'Налаживать',
    },
    {
        en: 'Back down',
        ru: 'Отступать',
    },
    {
        en: 'Live up to',
        ru: 'Оправдать',
    },
    {
        en: 'Account for',
        ru: 'Объяснять',
    },
    {
        en: 'Brush up on',
        ru: 'Освежать в памяти',
    },
    {
        en: 'Spark off',
        ru: 'Вызывать',
    },
    {
        en: 'Come down to',
        ru: 'Сводиться к',
    },
    {
        en: 'Boil down to',
        ru: 'Сводиться к',
    },
    {
        en: 'Carried away',
        ru: 'Увлечен',
    },
    {
        en: 'Occur to',
        ru: 'Приходить в голову',
    },
    {
        en: 'Fall through',
        ru: 'Провалиться',
    },
    {
        en: 'Slog away',
        ru: 'Усердно трудиться',
    },
    {
        en: 'Gobble up',
        ru: 'Проглотить, сожрать',
    },
    {
        en: 'Turn down',
        ru: 'Отклонить, убавить',
    },
    {
        en: 'Iron out',
        ru: 'Уладить, сгладить',
    },
    {
        en: 'Astonishment',
        ru: 'Удивление',
    },
    {
        en: 'Balanced',
        ru: 'Сбалансированный',
    },
    {
        en: 'Biscuit',
        ru: 'Печенье',
    },
    {
        en: 'Disappearance',
        ru: 'Исчезновение',
    },
    {
        en: 'Fatty',
        ru: 'Жирный',
    },
    {
        en: 'Heated',
        ru: 'Жаркий',
    },
    {
        en: 'Inability',
        ru: 'Неспособность',
    },
    {
        en: 'Missing',
        ru: 'Отсутствующий',
    },
    {
        en: 'Overheat',
        ru: 'Перегреваться',
    },
    {
        en: 'Ringer',
        ru: 'Звонок',
    },
    {
        en: 'Spendings',
        ru: 'Траты',
    },
    {
        en: 'Strike',
        ru: 'Поражать, удар',
    },
    {
        en: 'Unlocked',
        ru: 'Не запертая',
    },
    {
        en: 'Unsolved',
        ru: 'Нерешенный',
    },
    {
        en: 'Via',
        ru: 'Через',
    },
    {
        en: 'Pour down',
        ru: 'Льет, льет дождь',
    },
    {
        en: 'Plug info',
        ru: 'Включить в, подключить к',
    },
    {
        en: 'Plug in',
        ru: 'Подключить к сети',
    },
    {
        en: 'Write off',
        ru: 'Списать',
    },
    {
        en: 'Put across',
        ru: 'Донести',
    },
    {
        en: 'Get across',
        ru: 'Донести',
    },
    {
        en: 'Bump into',
        ru: 'Наткнуться на',
    },
    {
        en: 'Run across',
        ru: 'Наткнуться на',
    },
    {
        en: 'Clamp down',
        ru: 'Подавить, расправиться с',
    },
    {
        en: 'Crack down',
        ru: 'Подавить, расправиться с',
    },
    {
        en: 'Run through',
        ru: 'Пробежаться по',
    },
    {
        en: 'Hold up',
        ru: 'Застрять',
    },
    {
        en: 'Work out',
        ru: 'Заниматься, понять',
    },
    {
        en: 'Dwell on',
        ru: 'Останавливаться на',
    },
    {
        en: 'Doze off',
        ru: 'Задремать',
    },
    {
        en: 'Nod off',
        ru: 'Задремать',
    },
    {
        en: 'Run up against',
        ru: 'Сталкнуться с',
    },
    {
        en: 'Battery',
        ru: 'Батарея',
    },
    {
        en: 'Vacuum cleaner',
        ru: 'Пылесос',
    },
    {
        en: 'Evasion',
        ru: 'Уклонение',
    },
    {
        en: 'Fierce',
        ru: 'Свирепый',
    },
    {
        en: 'Fog',
        ru: 'Туман',
    },
    {
        en: 'Former',
        ru: 'Бывший',
    },
    {
        en: 'Hairdryer',
        ru: 'Фен',
    },
    {
        en: 'Immigration',
        ru: 'Иммиграция',
    },
    {
        en: 'Obstacle',
        ru: 'Препятствие',
    },
    {
        en: 'Protestor',
        ru: 'Протестующий',
    },
    {
        en: 'Riot',
        ru: 'Беспорядок',
    },
    {
        en: 'Soak',
        ru: 'Промокать',
    },
    {
        en: 'Socket',
        ru: 'Розетка',
    },
    {
        en: 'Tackle',
        ru: 'Решать',
    },
    {
        en: 'Toaster',
        ru: 'Тостер',
    },
    {
        en: 'Fall apart',
        ru: 'Развалиться',
    },
    {
        en: 'Hold back',
        ru: 'Сдерживать',
    },
    {
        en: 'Hack into',
        ru: 'Взломать',
    },
    {
        en: 'Speed up',
        ru: 'Ускорить',
    },
    {
        en: 'Stick to',
        ru: 'Придерживаться',
    },
    {
        en: 'Hold on',
        ru: 'Ждать',
    },
    {
        en: 'Polish up',
        ru: 'Усовершенствовать',
    },
    {
        en: 'Go over',
        ru: 'Повторить, пройти',
    },
    {
        en: 'Settle down',
        ru: 'Остепениться',
    },
    {
        en: 'Anticipation',
        ru: 'Предвкушение',
    },
    {
        en: 'Central',
        ru: 'Центральный',
    },
    {
        en: 'Database',
        ru: 'База данных',
    },
    {
        en: 'Gang',
        ru: 'Банда',
    },
    {
        en: 'Junction',
        ru: 'Перекресток',
    },
    {
        en: 'Preference',
        ru: 'Предпочтение',
    },
    {
        en: 'Registration',
        ru: 'Регистрация',
    },
    {
        en: 'Sunshine',
        ru: 'СОлнечный свет',
    },
    {
        en: 'Unlimited',
        ru: 'Безгарничный',
    },
    {
        en: 'Unprofitable',
        ru: 'Убыточный, неприбыльный',
    },
    {
        en: 'Willpower',
        ru: 'Сила воли',
    },
    {
        en: 'Look in',
        ru: 'Заглянуть к',
    },
    {
        en: 'Deprive of',
        ru: 'Лишать',
    },
    {
        en: 'Sell out',
        ru: 'Распродавать',
    },
    {
        en: 'Buy up',
        ru: 'Скупать',
    },
    {
        en: 'Wear out',
        ru: 'Изматываться, изнашиваться',
    },
    {
        en: 'Use up',
        ru: 'Израсходовать',
    },
    {
        en: 'Show off',
        ru: 'Выпендриваться',
    },
    {
        en: 'Take on',
        ru: 'Нанимать',
    },
    {
        en: 'Rip off',
        ru: 'Грабить',
    },
    {
        en: 'Measure up',
        ru: 'Соответствовать',
    },
    {
        en: 'Note down',
        ru: 'Записать',
    },
    {
        en: 'Keep off',
        ru: 'Воздерживаться от, не ходить по',
    },
    {
        en: 'Die down',
        ru: 'Утихать',
    },
    {
        en: 'Applause',
        ru: 'Аплодисменты',
    },
    {
        en: 'Breakthrough',
        ru: 'Прорыв',
    },
    {
        en: 'Daylight',
        ru: 'Дневной свет',
    },
    {
        en: 'Eagerly',
        ru: 'Охотно',
    },
    {
        en: 'Efficiently',
        ru: 'Эффективно',
    },
    {
        en: 'Gossip',
        ru: 'Сплетня',
    },
    {
        en: 'Grass',
        ru: 'Трава',
    },
    {
        en: 'Imprison',
        ru: 'Заключать в тюрьму',
    },
    {
        en: 'Inspiring',
        ru: 'Вдозновляющий',
    },
    {
        en: 'Mask',
        ru: 'Маска',
    },
    {
        en: 'Persistent',
        ru: 'Настойчивый',
    },
    {
        en: 'Premiere',
        ru: 'Премьера',
    },
    {
        en: 'Pursuit',
        ru: 'Погоня',
    },
    {
        en: 'Reckless',
        ru: 'Безрассудный',
    },
    {
        en: 'Rip-off',
        ru: 'Грабеж',
    },
    {
        en: 'Sadly',
        ru: 'Грустно',
    },
    {
        en: 'Trainee',
        ru: 'Стажер',
    },
    {
        en: 'Carry out',
        ru: 'Выполнять',
    },
    {
        en: 'Drop off',
        ru: 'Задремать',
    },
    {
        en: 'Copy down',
        ru: 'Переписать',
    },
    {
        en: 'Cut up',
        ru: 'Разрезать',
    },
    {
        en: 'Clear up',
        ru: 'Убрать',
    },
    {
        en: 'Drop in',
        ru: 'Зайти, глянуть',
    },
    {
        en: 'Call in',
        ru: 'Зайти, заглянуть',
    },
    {
        en: 'Call on',
        ru: 'Навещать',
    },
    {
        en: 'Grow out of',
        ru: 'Вырасти из',
    },
    {
        en: 'Hand out',
        ru: 'Раздавать',
    },
    {
        en: 'Cut in',
        ru: 'Перебивать, прервывать',
    },
    {
        en: 'Bring off',
        ru: 'Успешно выполнять',
    },
    {
        en: 'Black out',
        ru: 'Терять сознание',
    },
    {
        en: 'Pass out',
        ru: 'Терять сознание',
    },
    {
        en: 'Anytime',
        ru: 'В любое время',
    },
    {
        en: 'Blood',
        ru: 'Кровь',
    },
    {
        en: 'Breakdown',
        ru: 'Срыв',
    },
    {
        en: 'Brink',
        ru: 'Грань',
    },
    {
        en: 'CEO',
        ru: 'Генеральный директор',
    },
    {
        en: 'Clutter',
        ru: 'Хлам',
    },
    {
        en: 'Helper',
        ru: 'Помощник',
    },
    {
        en: 'Pot',
        ru: 'Кастрюля',
    },
    {
        en: 'Tragic',
        ru: 'Трагический',
    },
    {
        en: 'Whenever',
        ru: 'Всякий раз, когда',
    },
    {
        en: 'Wonderfully',
        ru: 'Замечательно',
    },
    {
        en: 'Worksheet',
        ru: 'Рабочий материал',
    },
    {
        en: 'Clean up',
        ru: 'Убираться',
    },
    {
        en: 'Be into',
        ru: 'Интересоваться',
    },
    {
        en: 'Fall behind',
        ru: 'Отставать',
    },
    {
        en: 'Catch up',
        ru: 'Догнать',
    },
    {
        en: 'Hand in',
        ru: 'Подавать',
    },
    {
        en: 'Read up on',
        ru: 'Читать дополнительный материал',
    },
    {
        en: 'Draw up',
        ru: 'Составлять',
    },
    {
        en: 'Knock off',
        ru: 'Заканчивать, прерываться',
    },
    {
        en: 'Slack off',
        ru: 'Расслабляться, снижать темп работы',
    },
    {
        en: 'Weigh up',
        ru: 'Взвесить',
    },
    {
        en: 'Come up',
        ru: 'Подойти, происходить',
    },
    {
        en: 'Call back',
        ru: 'Перезвонить',
    },
    {
        en: 'Annoyance',
        ru: 'Раздражение',
    },
    {
        en: 'Berserk',
        ru: 'Бешеный',
    },
    {
        en: 'Pros and cons',
        ru: 'За и против',
    },
    {
        en: 'Deadline',
        ru: 'Крайний срок',
    },
    {
        en: 'Deceive',
        ru: 'Обманывать',
    },
    {
        en: 'Inseparable',
        ru: 'Неотъемлемый',
    },
    {
        en: 'Option',
        ru: 'Вариант',
    },
    {
        en: 'Persuasive',
        ru: 'Убедительный',
    },
    {
        en: 'Resignation',
        ru: 'Отставка',
    },
    {
        en: 'Straight',
        ru: 'Прямой',
    },
    {
        en: 'Update',
        ru: 'Обновление',
    },
    {
        en: 'Yoga',
        ru: 'Йога',
    },
    {
        en: 'Sort out',
        ru: 'Уладить',
    },
    {
        en: 'Bail out',
        ru: 'Выручить',
    },
    {
        en: 'Do up',
        ru: 'Чинить, ремонтировать',
    },
    {
        en: 'Pop into',
        ru: 'Заскочить в',
    },
    {
        en: 'Splash out',
        ru: 'Сорить деньгами, тратиться',
    },
    {
        en: 'Fall for',
        ru: 'Влюбиться, попадать',
    },
    {
        en: 'Take out',
        ru: 'Выносить, вынимать',
    },
    {
        en: 'Mop up',
        ru: 'Вытирать',
    },
    {
        en: 'Cloth',
        ru: 'Тряпка',
    },
    {
        en: 'Garbage',
        ru: 'Мусор',
    },
    {
        en: 'Lad',
        ru: 'Парень',
    },
    {
        en: 'Originally',
        ru: 'Изначально',
    },
    {
        en: 'Persistence',
        ru: 'Настойчивость',
    },
    {
        en: 'Rural',
        ru: 'Сельский',
    },
    {
        en: 'Seatbelt',
        ru: 'Ремень безопасности',
    },
    {
        en: 'Spilt',
        ru: 'Разлитый',
    },
    {
        en: 'Trash',
        ru: 'Мусор',
    },
    {
        en: 'Trick',
        ru: 'Трюк',
    },
    {
        en: 'Unsatisfactory',
        ru: 'Неудовлетворительный',
    },
    {
        en: 'Look down',
        ru: 'Смотреть свысока',
    },
    {
        en: 'Write down',
        ru: 'Записывать',
    },
    {
        en: 'Aversion',
        ru: 'Отвращение',
    },
    {
        en: 'Blank',
        ru: 'Бланк',
    },
    {
        en: 'Cooperative',
        ru: 'Сговорчивые, совместные',
    },
    {
        en: 'Dawn',
        ru: 'Рассвет',
    },
    {
        en: 'Jog',
        ru: 'Пробежка',
    },
    {
        en: 'Let in',
        ru: 'Впускать',
    },
    {
        en: 'Add up to',
        ru: 'Способствовать',
    },
    {
        en: 'Hold out',
        ru: 'Протягивать, питать',
    },
    {
        en: 'Knock down',
        ru: 'Сбить с ног',
    },
    {
        en: 'Turn out',
        ru: 'Оказаться',
    },
    {
        en: 'Turn in',
        ru: 'Лечь спать',
    },
    {
        en: 'Turn on',
        ru: 'Включить',
    },
    {
        en: 'Run into',
        ru: 'Столкнуться',
    },
    {
        en: 'Run off',
        ru: 'Сбежать',
    },
    {
        en: 'Turn up',
        ru: 'Сделать громче',
    },
    {
        en: 'Ad',
        ru: 'Рекламное объявление',
    },
    {
        en: 'Bankrupt',
        ru: 'Банкрот',
    },
    {
        en: 'Commute',
        ru: 'Ехать, добираться',
    },
    {
        en: 'Delight',
        ru: 'Восторг',
    },
    {
        en: 'Ensure',
        ru: 'Убедиться',
    },
    {
        en: 'Freezing',
        ru: 'Холодно, ледяной',
    },
    {
        en: 'Opponent',
        ru: 'Соперник',
    },
    {
        en: 'Unbearable',
        ru: 'Невыносимый',
    },
    {
        en: 'Safe',
        ru: 'Сейф',
    },
    {
        en: 'Pay back',
        ru: 'Выплатить',
    },
    {
        en: 'Look out',
        ru: 'Быть осторожным, выглядывать',
    },
    {
        en: 'Broke in',
        ru: 'Вломиться',
    },
    {
        en: 'Fall out',
        ru: 'Ссориться',
    },
    {
        en: 'Come across as',
        ru: 'Казаться',
    },
    {
        en: 'Piece together',
        ru: 'Собрать воедино',
    },
    {
        en: 'Look out for',
        ru: 'Следить, наблюдать',
    },
    {
        en: 'Mix up',
        ru: 'Путать',
    },
    {
        en: 'Pass away',
        ru: 'Скончаться',
    },
    {
        en: 'Detective',
        ru: 'Детектив',
    },
    {
        en: 'Graduation',
        ru: 'Окончание',
    },
    {
        en: 'Handy',
        ru: 'Удобный',
    },
    {
        en: 'Intervene',
        ru: 'Вмешиваться',
    },
    {
        en: 'Loan',
        ru: 'Кредит',
    },
    {
        en: 'Mystery',
        ru: 'Загадка',
    },
    {
        en: 'Pickpocket',
        ru: 'Карманник',
    },
    {
        en: 'Shyness',
        ru: 'Застенчивость',
    },
    {
        en: 'Show up',
        ru: 'Появляться',
    },
    {
        en: 'Set off',
        ru: 'Отправляться',
    },
    {
        en: 'Get together',
        ru: 'Собираться',
    },
    {
        en: 'Tell off',
        ru: 'Отчитать',
    },
    {
        en: 'Try on',
        ru: 'Примерять',
    },
    {
        en: 'Go through',
        ru: 'Проходить через',
    },
    {
        en: 'Get out',
        ru: 'Убрать, избавиться от',
    },
    {
        en: 'Speak up',
        ru: 'Говорить громче',
    },
    {
        en: 'Barely',
        ru: 'Едва',
    },
    {
        en: 'Bully',
        ru: 'Издеваться',
    },
    {
        en: 'Lunchtime',
        ru: 'Время обеда',
    },
    {
        en: 'Microphone',
        ru: 'Микрофон',
    },
    {
        en: 'Predict',
        ru: 'Предсказать',
    },
    {
        en: 'Warning',
        ru: 'Предупреждение',
    },
    {
        en: 'Go on',
        ru: 'Идти дальше',
    },
    {
        en: 'Burst into',
        ru: 'Разразиться',
    },
    {
        en: 'Get in',
        ru: 'Входить, попадать в',
    },
    {
        en: 'Burn down',
        ru: 'Сгореть, сжигать',
    },
    {
        en: 'Turn into',
        ru: 'Превратиться в',
    },
    {
        en: 'Burst out',
        ru: 'Разразиться',
    },
    {
        en: 'Stand out',
        ru: 'Выделяться',
    },
    {
        en: 'Freak out',
        ru: 'Сходить с ума',
    },
    {
        en: 'Hang up',
        ru: 'Вешать трубку',
    },
    {
        en: 'Hang on',
        ru: 'Ждать',
    },
    {
        en: 'Fairy tail',
        ru: 'Сказка',
    },
    {
        en: 'Adorable',
        ru: 'Очаровательная',
    },
    {
        en: 'Businesswoman',
        ru: 'Деловая женщина',
    },
    {
        en: 'Cute',
        ru: 'Милый',
    },
    {
        en: 'Invader',
        ru: 'Захватчик',
    },
    {
        en: 'Judgment',
        ru: 'Суждение',
    },
    {
        en: 'Laughter',
        ru: 'Смех',
    },
    {
        en: 'Prisoner',
        ru: 'Заключенный',
    },
    {
        en: 'Tiny',
        ru: 'Крошечный',
    },
    {
        en: 'Worldwide',
        ru: 'Мировой',
    },
    {
        en: 'Knock out',
        ru: 'Нокаутировать, вырубить',
    },
    {
        en: 'Break off',
        ru: 'Разорвать',
    },
    {
        en: 'Run over',
        ru: 'Сбить, пробежаться',
    },
    {
        en: 'Do without',
        ru: 'Обойтись',
    },
    {
        en: 'Sum up',
        ru: 'Подводить итог',
    },
    {
        en: 'Throw up',
        ru: 'Рвать',
    },
    {
        en: 'Move in',
        ru: 'Въехать',
    },
    {
        en: 'Call round',
        ru: 'Заходить',
    },
    {
        en: 'Jot down',
        ru: 'Записать',
    },
    {
        en: 'Warm up',
        ru: 'Разогреть, разминаться',
    },
    {
        en: 'Hang around',
        ru: 'Слоняться',
    },
    {
        en: 'Act up',
        ru: 'Капризничать',
    },
    {
        en: 'Go together',
        ru: 'Сочетаться',
    },
    {
        en: 'Do over',
        ru: 'Переделать, сделать заново',
    },
    {
        en: 'See to',
        ru: 'Позаботиться',
    },
    {
        en: 'Blouse',
        ru: 'Блузка',
    },
    {
        en: 'Breath',
        ru: 'Дыхание',
    },
    {
        en: 'Diplomatic',
        ru: 'Дипломатический',
    },
    {
        en: 'Distant',
        ru: 'Отдаленный',
    },
    {
        en: 'Engagement',
        ru: 'Помолвка',
    },
    {
        en: 'Formality',
        ru: 'Формальность',
    },
    {
        en: 'Lorry',
        ru: 'Грузовик',
    },
    {
        en: 'Poison',
        ru: 'Яд',
    },
    {
        en: 'Upstairs',
        ru: 'Вверх по лестнице',
    },
    {
        en: 'Youth',
        ru: 'Молодежь',
    },
    {
        en: 'Will',
        ru: 'Воля',
    },
    {
        en: 'Go ahead with',
        ru: 'Приступить',
    },
    {
        en: 'Answer back',
        ru: 'Грубить',
    },
    {
        en: 'Leap at',
        ru: 'Ухватиться за',
    },
    {
        en: 'Leave aside',
        ru: 'Оставить в стороне',
    },
    {
        en: 'Move out',
        ru: 'Съезжать',
    },
    {
        en: 'Bring in',
        ru: 'Привлечь',
    },
    {
        en: 'Meet up',
        ru: 'Встретиться',
    },
    {
        en: 'Drop by',
        ru: 'Заходить',
    },
    {
        en: 'Run down',
        ru: 'Сбить',
    },
    {
        en: 'Hang about',
        ru: 'Слоняться без дела',
    },
    {
        en: 'Head for',
        ru: 'Направляться',
    },
    {
        en: 'Come round',
        ru: 'Заходить, заглянуть',
    },
    {
        en: 'Advisor',
        ru: 'Консультант',
    },
    {
        en: 'Aside',
        ru: 'В сторону',
    },
    {
        en: 'Cyclist',
        ru: 'Велосипедист',
    },
    {
        en: 'Disadvantaged',
        ru: 'Малообеспеченный',
    },
    {
        en: 'Highway',
        ru: 'Шоссе',
    },
    {
        en: 'Pride',
        ru: 'Гордость',
    },
    {
        en: 'Unsurprising',
        ru: 'Неудивительный',
    },
    {
        en: 'Stand up for',
        ru: 'Отстаивать',
    },
    {
        en: 'Turn back',
        ru: 'Повернуть назад',
    },
    {
        en: 'Set out',
        ru: 'Отправиться',
    },
    {
        en: 'Mess around',
        ru: 'Бездельничать',
    },
    {
        en: 'Wind up',
        ru: 'Оказаться',
    },
    {
        en: 'Stay in',
        ru: 'Оставаться дома',
    },
    {
        en: 'Rub out',
        ru: 'Стереть',
    },
    {
        en: 'Stay out',
        ru: 'Отсутствовать, гулять',
    },
    {
        en: 'Think ahead',
        ru: 'Думать наперед',
    },
    {
        en: 'Get off',
        ru: 'Сойти, выйти',
    },
    {
        en: 'Sign out',
        ru: 'Выписаться',
    },
    {
        en: 'Move on to',
        ru: 'Перейти к',
    },
    {
        en: 'Read out',
        ru: 'Зачитывать',
    },
    {
        en: 'Scribble down',
        ru: 'Впопыхах записать',
    },
    {
        en: 'Sign up',
        ru: 'Записаться',
    },
    {
        en: 'Bottle up',
        ru: 'Сдерживать, скрывать',
    },
    {
        en: 'Hatred',
        ru: 'Ненависть',
    },
    {
        en: 'Hostility',
        ru: 'Враждебность',
    },
    {
        en: 'Journey',
        ru: 'Путешествие',
    },
    {
        en: 'Resentment',
        ru: 'Обида, возмущение',
    },
    {
        en: 'Stain',
        ru: 'Пятно',
    },
    {
        en: 'Sunrise',
        ru: 'Рассвет',
    },
    {
        en: 'Teen',
        ru: 'Подросток',
    },
    {
        en: 'Traveller',
        ru: 'Путешественник',
    },
    {
        en: 'Be up to',
        ru: 'Решать',
    },
    {
        en: 'Sign in',
        ru: 'Зарегистрироваться, войти в систему',
    },
    {
        en: 'Let out',
        ru: 'Выпускать',
    },
    {
        en: 'Pay off',
        ru: 'Окупаться',
    },
    {
        en: 'Plan ahead',
        ru: 'Планировать заранее',
    },
    {
        en: 'Fill out',
        ru: 'Заполнить',
    },
    {
        en: 'Heat up',
        ru: 'Нагревать, подогревать',
    },
    {
        en: 'Shop around',
        ru: 'Присмотерться, подыскивать',
    },
    {
        en: 'Try out',
        ru: 'Опробовать',
    },
    {
        en: 'Taken aback',
        ru: 'Ошеломлен',
    },
    {
        en: 'Dwell upon',
        ru: 'Останавливаться на',
    },
    {
        en: 'Mess about',
        ru: 'Бездельничать',
    },
    {
        en: 'Keep on',
        ru: 'Продолжать',
    },
    {
        en: 'Go with',
        ru: 'Сочетаться',
    },
    {
        en: 'Laze around',
        ru: 'Бездельничать',
    },
    {
        en: 'Move up to',
        ru: 'Придвинуться',
    },
    {
        en: 'Switch on',
        ru: 'Включить',
    },
    {
        en: 'Pick at',
        ru: 'Придираться',
    },
    {
        en: 'Comfortably',
        ru: 'Удобно',
    },
    {
        en: 'Declaration',
        ru: 'Декларация',
    },
    {
        en: 'Directness',
        ru: 'Прямота',
    },
    {
        en: 'Instruct',
        ru: 'Инструктировать',
    },
    {
        en: 'Long-term',
        ru: 'Долгосрочный',
    },
    {
        en: 'Microwave',
        ru: 'Микроволновая печь',
    },
    {
        en: 'Pill',
        ru: 'Таблетка',
    },
    {
        en: 'Planning',
        ru: 'Планирование',
    },
    {
        en: 'Reception',
        ru: 'Стойка регистрации',
    },
    {
        en: 'Upon',
        ru: 'На',
    },
    {
        en: 'Vary',
        ru: 'Варьироваться',
    },
    {
        en: 'Fool about',
        ru: 'Валять дурака, дурачиться',
    },
    {
        en: 'Zoom in',
        ru: 'Увеличить изображение',
    },
    {
        en: 'Zoom out',
        ru: 'Уменьшить изображение',
    },
    {
        en: 'Hear from',
        ru: 'Слышать от, получать вести от',
    },
    {
        en: 'Grow on',
        ru: 'Нравиться все больше',
    },
    {
        en: 'Ring back',
        ru: 'Перезвонить',
    },
    {
        en: 'Ask around',
        ru: 'Спрашивать вокруг',
    },
    {
        en: 'Keep away from',
        ru: 'Держаться подальше от',
    },
    {
        en: 'Phone back',
        ru: 'Перезвонить',
    },
    {
        en: 'Eat in',
        ru: 'Питаться дома',
    },
    {
        en: 'Tear up',
        ru: 'Разрывать',
    },
    {
        en: 'Boot up',
        ru: 'Загружать',
    },
    {
        en: 'Laze about',
        ru: 'Бездельничать',
    },
    {
        en: 'Lie down',
        ru: 'Прилечь',
    },
    {
        en: 'Tidy up',
        ru: 'Убирать',
    },
    {
        en: 'Call by',
        ru: 'Зайти',
    },
    {
        en: 'Ardent',
        ru: 'Ярый',
    },
    {
        en: 'Despair',
        ru: 'Отчаяние',
    },
    {
        en: 'Edge',
        ru: 'Край',
    },
    {
        en: 'Examination',
        ru: 'Экзамен',
    },
    {
        en: 'Fabulously',
        ru: 'Баснословно',
    },
    {
        en: 'Meaningful',
        ru: 'Осмысленный',
    },
    {
        en: 'Observer',
        ru: 'Наблюдатель',
    },
    {
        en: 'Onlooker',
        ru: 'Наблюдатель',
    },
    {
        en: 'Phenomenally',
        ru: 'Феноменально',
    },
    {
        en: 'Notice',
        ru: 'Уведомление',
    },
    {
        en: 'Look over',
        ru: 'Просматривать',
    },
    {
        en: 'Beat up',
        ru: 'Избивать',
    },
    {
        en: 'Cross out',
        ru: 'Вычеркнуть',
    },
    {
        en: 'Keep up',
        ru: 'Продолжать',
    },
    {
        en: 'Change into',
        ru: 'Превратиться в',
    },
    {
        en: 'Bo back on',
        ru: 'Отказаться от',
    },
    {
        en: 'See after',
        ru: 'Присматривать за',
    },
    {
        en: 'Destination',
        ru: 'Место назначения',
    },
    {
        en: 'Deteriorate',
        ru: 'Ухудшаться, портиться',
    },
    {
        en: 'Inexplicable',
        ru: 'Необъяснимый',
    },
    {
        en: 'Reject',
        ru: 'Отклонять',
    },
    {
        en: 'Restriction',
        ru: 'Ограничение',
    },
    {
        en: 'For the sake',
        ru: 'Ради',
    },
    {
        en: 'Spot',
        ru: 'Замечать',
    },
    {
        en: 'Fall down',
        ru: 'Упасть',
    },
    {
        en: 'Bear with',
        ru: 'Потерпеть',
    },
    {
        en: 'Help out',
        ru: 'Выручать',
    },
    {
        en: 'Wash up',
        ru: 'Мыть посуду',
    },
    {
        en: 'Slip up',
        ru: 'Ошибиться',
    },
    {
        en: 'Branch out',
        ru: 'Разветвляться',
    },
    {
        en: 'Send out',
        ru: 'Рассылать',
    },
    {
        en: 'Balloon',
        ru: 'Воздушный шар',
    },
    {
        en: 'CV',
        ru: 'Резюме',
    },
    {
        en: 'Electronics',
        ru: 'Электроника',
    },
    {
        en: 'Fake',
        ru: 'Подделка',
    },
    {
        en: 'Grab',
        ru: 'Схватить',
    },
    {
        en: 'Pavement',
        ru: 'Тротуар',
    },
    {
        en: 'Prepayment',
        ru: 'Предоплата',
    },
    {
        en: 'Rotten',
        ru: 'Гнилой',
    },
    {
        en: 'Scent',
        ru: 'Запах',
    },
    {
        en: 'Straightaway',
        ru: 'Немедленно сразу',
    },
    {
        en: 'Stumble',
        ru: 'Спотыкаться',
    },
    {
        en: 'Unfamiliar',
        ru: 'Незнакомый',
    },
    {
        en: 'Within',
        ru: 'В течение',
    },
    {
        en: 'Acknowledge',
        ru: 'Признавать',
    },
    {
        en: 'Distinctly',
        ru: 'Отчетливо',
    },
    {
        en: 'Immense',
        ru: 'Огромный',
    },
    {
        en: 'Impact',
        ru: 'Влияние, влиять',
    },
    {
        en: 'Pronounce',
        ru: 'Произносить',
    },
    {
        en: 'Puzzle',
        ru: 'Загадка',
    },
    {
        en: 'Repeatedly',
        ru: 'Повторно',
    },
    {
        en: 'Requirement',
        ru: 'Требование',
    },
    {
        en: 'Schoolchildren',
        ru: 'Школьники',
    },
    {
        en: 'Strategy',
        ru: 'Стратегия',
    },
    {
        en: 'Untouched',
        ru: 'Нетронутый',
    },
    {
        en: 'Examine',
        ru: 'Обследовать',
    },
    {
        en: 'Victim',
        ru: 'Жертва',
    },
    {
        en: 'Review',
        ru: 'Пересмотреть',
    },
    {
        en: 'Depress',
        ru: 'Угнетать',
    },
    {
        en: 'Prolong',
        ru: 'Продлить',
    },
    {
        en: 'Skilfully',
        ru: 'Искусно',
    },
    {
        en: 'Ungrateful',
        ru: 'Неблагодарный',
    },
    {
        en: 'Amateur',
        ru: 'Любитель',
    },
    {
        en: 'Breathtaking',
        ru: 'Захватывающий',
    },
    {
        en: 'Impatiently',
        ru: 'Нетерпеливо',
    },
    {
        en: 'Low-paid',
        ru: 'Низкооплачиваемый',
    },
    {
        en: 'Overseas',
        ru: 'За рубежом',
    },
    {
        en: 'Picturesque',
        ru: 'Живописный',
    },
    {
        en: 'Scarcely',
        ru: 'Едва',
    },
    {
        en: 'Spill',
        ru: 'Проливать',
    },
    {
        en: 'Well-behaved',
        ru: 'Воспитанный',
    },
    {
        en: 'Prime minister',
        ru: 'Премьер-министр',
    },
    {
        en: 'Indecisively',
        ru: 'Нерешительно',
    },
    {
        en: 'Offensively',
        ru: 'Оскорбительно',
    },
    {
        en: 'Pointless',
        ru: 'Бессмысленно',
    },
    {
        en: 'Reinvent',
        ru: 'Изобретать заново',
    },
    {
        en: 'Scream',
        ru: 'Закричать',
    },
    {
        en: 'Stage',
        ru: 'Этап',
    },
    {
        en: 'Systematically',
        ru: 'Систематически',
    },
    {
        en: 'Worthless',
        ru: 'Бесполезно',
    },
    {
        en: 'Accomplished',
        ru: 'Искусный',
    },
    {
        en: 'Banquet',
        ru: 'Банкет',
    },
    {
        en: 'Blissfully',
        ru: 'Блаженно',
    },
    {
        en: 'Composer',
        ru: 'Композитор',
    },
    {
        en: 'Dreadfully',
        ru: 'Ужасно',
    },
    {
        en: 'Enterprise',
        ru: 'Предприятие',
    },
    {
        en: 'Hugely',
        ru: 'Весьма',
    },
    {
        en: 'Illustrate',
        ru: 'Иллюстрировать',
    },
    {
        en: 'Miserable',
        ru: 'Несчастный',
    },
    {
        en: 'Negotiation',
        ru: 'Переговоры',
    },
    {
        en: 'Niche',
        ru: 'Ниша',
    },
    {
        en: 'Schooldays',
        ru: 'Школьные годы',
    },
    {
        en: 'Vaguely',
        ru: 'Смутно',
    },
    {
        en: 'Appalled',
        ru: 'Потрясен',
    },
    {
        en: 'Confession',
        ru: 'Признание',
    },
    {
        en: 'Devastated',
        ru: 'Опустошенный',
    },
    {
        en: 'Eternally',
        ru: 'Вечно',
    },
    {
        en: 'Exceptionally',
        ru: 'Исключительно',
    },
    {
        en: 'Painfully',
        ru: 'Болезненно',
    },
    {
        en: 'Patently',
        ru: 'Совершенно',
    },
    {
        en: 'Probable',
        ru: 'Вероятный',
    },
    {
        en: 'Readily',
        ru: 'Легко',
    },
    {
        en: 'Widely',
        ru: 'Широко',
    },
    {
        en: 'Astoundingly',
        ru: 'Поразительно',
    },
    {
        en: 'Chronic',
        ru: 'Хронический',
    },
    {
        en: 'Contaminated',
        ru: 'Загрязненный',
    },
    {
        en: 'Critical',
        ru: 'Критический',
    },
    {
        en: 'Desperately',
        ru: 'Отчаянно',
    },
    {
        en: 'Excessively',
        ru: 'Чрезмерно',
    },
    {
        en: 'Extraordinarily',
        ru: 'Необычно',
    },
    {
        en: 'Fantastically',
        ru: 'Фантастически',
    },
    {
        en: 'Guitarist',
        ru: 'Гитарист',
    },
    {
        en: 'Incomprehensible',
        ru: 'Непостижимый',
    },
    {
        en: 'Landscape',
        ru: 'Пейзаж',
    },
    {
        en: 'Naughty',
        ru: 'Непослушный',
    },
    {
        en: 'Plot',
        ru: 'Сюжет',
    },
    {
        en: 'Priced',
        ru: 'Оцененный',
    },
    {
        en: 'Remarkably',
        ru: 'Замечательно',
    },
    {
        en: 'Snake',
        ru: 'Змея',
    },
    {
        en: 'Strikingly',
        ru: 'Поразительно',
    },
    {
        en: 'Terrifically',
        ru: 'Ужасно',
    },
    {
        en: 'Uncommonly',
        ru: 'Необыкновенно',
    },
    {
        en: 'Unqualified',
        ru: 'Неквалифицированный',
    },
    {
        en: 'Unusually',
        ru: 'Необычно',
    },
    {
        en: 'Accepted',
        ru: 'Принятый, признанный',
    },
    {
        en: 'Commercially',
        ru: 'Коммерчески',
    },
    {
        en: 'Comparatively',
        ru: 'Сравнительно',
    },
    {
        en: 'Contagious',
        ru: 'Заразный',
    },
    {
        en: 'Debated',
        ru: 'Обсуждаемый',
    },
    {
        en: 'Densely',
        ru: 'Густо, плотно',
    },
    {
        en: 'Enormously',
        ru: 'Чрезвычайно',
    },
    {
        en: 'Fiercely',
        ru: 'Жестко',
    },
    {
        en: 'Genetically',
        ru: 'Генетически',
    },
    {
        en: 'Hotly',
        ru: 'Грячо',
    },
    {
        en: 'Immensely',
        ru: 'Чрезвычайно',
    },
    {
        en: 'Memorable',
        ru: 'Памятный',
    },
    {
        en: 'Merely',
        ru: 'Просто',
    },
    {
        en: 'Modified',
        ru: 'Модифицированный',
    },
    {
        en: 'Outlook',
        ru: 'Взгляд',
    },
    {
        en: 'Populated',
        ru: 'Населенный',
    },
    {
        en: 'Relaxed',
        ru: 'Расслабленный',
    },
    {
        en: 'Respected',
        ru: 'Уважаемый',
    },
    {
        en: 'Severely',
        ru: 'Сильно',
    },
    {
        en: 'Straightforward',
        ru: 'Прямой',
    },
    {
        en: 'Superficial',
        ru: 'Поверхностный',
    },
    {
        en: 'Throughout',
        ru: 'Во всём',
    },
    {
        en: 'Unconvincing',
        ru: 'Неубедительный',
    },
    {
        en: 'Viable',
        ru: 'Жизнеспособный',
    },
    {
        en: 'Astounding',
        ru: 'Поразительный',
    },
    {
        en: 'Comedy',
        ru: 'Комедия',
    },
    {
        en: 'Dazzling',
        ru: 'Ослепительный',
    },
    {
        en: 'Filthy',
        ru: 'Грязный',
    },
    {
        en: 'Gorgeous',
        ru: 'Великолепный',
    },
    {
        en: 'Hilarious',
        ru: 'Веселый',
    },
    {
        en: 'Impeccable',
        ru: 'Безупречный',
    },
    {
        en: 'Starving',
        ru: 'Голодный',
    },
    {
        en: 'Terrifying',
        ru: 'Ужасающий',
    },
    {
        en: 'Thrilled',
        ru: 'Взволнованный',
    },
    {
        en: 'Tranquillity',
        ru: 'Спокойствие',
    },
    {
        en: 'Trivial',
        ru: 'Тривиальный',
    },
    {
        en: 'Virtue',
        ru: 'Добродетель',
    },
    {
        en: 'Apart',
        ru: 'Помимо',
    },
    {
        en: 'Appeal',
        ru: 'Привлекать',
    },
    {
        en: 'Confusion',
        ru: 'Путаница',
    },
    {
        en: 'Gardener',
        ru: 'Садовник',
    },
    {
        en: 'Haste',
        ru: 'Спешка',
    },
    {
        en: 'Knitting',
        ru: 'Вязание',
    },
    {
        en: 'Proverb',
        ru: 'Пословица',
    },
    {
        en: 'Relieve',
        ru: 'Облегчать',
    },
    {
        en: 'Sewing',
        ru: 'Шитье',
    },
    {
        en: 'Tricky',
        ru: 'Каверзный',
    },
    {
        en: 'Unanimously',
        ru: 'Единогласно',
    },
    {
        en: 'Volunteering',
        ru: 'Волонтерство',
    },
    {
        en: 'Affectionate',
        ru: 'Любящий',
    },
    {
        en: 'Ambiguous',
        ru: 'Двусмысленный',
    },
    {
        en: 'Amusing',
        ru: 'Забавный',
    },
    {
        en: 'Civilisation',
        ru: 'Цивилизация',
    },
    {
        en: 'Instability',
        ru: 'Нестабильность',
    },
    {
        en: 'Interpretation',
        ru: 'Интерпретация',
    },
    {
        en: 'Mild',
        ru: 'Мягкий',
    },
    {
        en: 'Misconception',
        ru: 'Заблуждение',
    },
    {
        en: 'Modestly',
        ru: 'Скромно',
    },
    {
        en: 'Overwhelmed',
        ru: 'Потрясенный',
    },
    {
        en: 'Piracy',
        ru: 'Пиратство',
    },
    {
        en: 'Sheer',
        ru: 'Пустой',
    },
    {
        en: 'Spicy',
        ru: 'Острый',
    },
    {
        en: 'Toast',
        ru: 'Тоаст',
    },
    {
        en: 'Trustworthy',
        ru: 'Надежный',
    },
    {
        en: 'Balance',
        ru: 'Баланс',
    },
    {
        en: 'Believer',
        ru: 'Верующий',
    },
    {
        en: 'Endangered',
        ru: 'Исчезающий',
    },
    {
        en: 'Eyesight',
        ru: 'Зрение',
    },
    {
        en: 'Friendliness',
        ru: 'Дружелюбие',
    },
    {
        en: 'Humble',
        ru: 'Скромный, смиренный',
    },
    {
        en: 'Inextricably',
        ru: 'Неразрывно',
    },
    {
        en: 'Itself',
        ru: 'Само',
    },
    {
        en: 'Mass',
        ru: 'Массовый',
    },
    {
        en: 'Mental',
        ru: 'Психический',
    },
    {
        en: 'Nonsense',
        ru: 'Чушь, вздор',
    },
    {
        en: 'Openness',
        ru: 'Открытость',
    },
    {
        en: 'Overlook',
        ru: 'Упускают из виду',
    },
    {
        en: 'Overrated',
        ru: 'Переоцененный',
    },
    {
        en: 'Paragraph',
        ru: 'Абзац',
    },
    {
        en: 'Perspective',
        ru: 'Точка зрения',
    },
    {
        en: 'Prank',
        ru: 'Розыгрыш',
    },
    {
        en: 'Roughly',
        ru: 'Грубо',
    },
    {
        en: 'Sentimental',
        ru: 'Сентиментальный',
    },
    {
        en: 'Species',
        ru: 'Вид, виды',
    },
    {
        en: 'Spit',
        ru: 'Плевать',
    },
    {
        en: 'Superb',
        ru: 'Превосходный',
    },
    {
        en: 'Track',
        ru: 'Отслеживать, трек, дорожка',
    },
    {
        en: 'Vitality',
        ru: 'Жизненно',
    },
    {
        en: 'Weekly',
        ru: 'Еженедельно',
    },
    {
        en: 'Relative',
        ru: 'Относительный',
    },
    {
        en: 'Appealing',
        ru: 'Привлекательный',
    },
    {
        en: 'Assessment',
        ru: 'Оценка',
    },
    {
        en: 'Assume',
        ru: 'Предполагать',
    },
    {
        en: 'Awkward',
        ru: 'Неловкий',
    },
    {
        en: 'Compulsory',
        ru: 'Принудительный, обязательный',
    },
    {
        en: 'Discrimination',
        ru: 'Дискриминация',
    },
    {
        en: 'Disregard',
        ru: 'Пренебрежение',
    },
    {
        en: 'Drastically',
        ru: 'Резко, радикально',
    },
    {
        en: 'Real estate',
        ru: 'Недвижимость',
    },
    {
        en: 'Exploitation',
        ru: 'Эксплуатация',
    },
    {
        en: 'Gender',
        ru: 'Пол',
    },
    {
        en: 'Genuineness',
        ru: 'Подлинность',
    },
    {
        en: 'Insulting',
        ru: 'Оскорбительный',
    },
    {
        en: 'Labour',
        ru: 'Рабочая сила',
    },
    {
        en: 'Overpriced',
        ru: 'Переоцененный',
    },
    {
        en: 'Pleasantly',
        ru: 'Приятно',
    },
    {
        en: 'Presume',
        ru: 'Предполагать',
    },
    {
        en: 'Responsibility',
        ru: 'Ответственно',
    },
    {
        en: 'Rhetorical',
        ru: 'Риторический',
    },
    {
        en: 'Ruthless',
        ru: 'Безжалостный',
    },
    {
        en: 'Subjective',
        ru: 'Субъективный',
    },
    {
        en: 'Surpass',
        ru: 'Превзойти',
    },
    {
        en: 'Unavoidable',
        ru: 'Неизбежный',
    },
    {
        en: 'Underline',
        ru: 'Подчеркнуть',
    },
    {
        en: 'Relieved',
        ru: 'Рад',
    },
    {
        en: 'Anyhow',
        ru: 'Во всяком случае',
    },
    {
        en: 'Colossal',
        ru: 'Колоссфльный',
    },
    {
        en: 'Commitment',
        ru: 'Приверженность',
    },
    {
        en: 'Dedication',
        ru: '',
    },
    {
        en: 'Edition',
        ru: 'Издание',
    },
    {
        en: 'Emphasis',
        ru: 'Акцент',
    },
    {
        en: 'Frustrating',
        ru: 'Разочаровывающий',
    },
    {
        en: 'Gentleman',
        ru: 'Джентльмен',
    },
    {
        en: 'Outdated',
        ru: 'Устаревший',
    },
    {
        en: 'Painstaking',
        ru: 'Кропотливый',
    },
    {
        en: 'Relief',
        ru: 'Облегчение',
    },
    {
        en: 'Scheme',
        ru: 'Схема',
    },
    {
        en: 'Seemingly',
        ru: 'Казалось бы',
    },
    {
        en: 'Ventilation',
        ru: 'Вентиляция',
    },
    {
        en: 'Wholly',
        ru: 'Совершенно',
    },
    {
        en: 'Drawback',
        ru: 'Недостаток',
    },
    {
        en: 'Inaccuracy',
        ru: 'Неточность',
    },
    {
        en: 'Interestingly',
        ru: 'Интересно',
    },
    {
        en: 'Irresistible',
        ru: 'Непреодолимый',
    },
    {
        en: 'Meantime',
        ru: 'Тем временем',
    },
    {
        en: 'Meanwhile',
        ru: 'Между тем',
    },
    {
        en: 'Minor',
        ru: 'Незначительный',
    },
    {
        en: 'Mispronounce',
        ru: 'Неправильно произносить',
    },
    {
        en: 'Neighbourhood',
        ru: 'Соседство',
    },
    {
        en: 'Seminar',
        ru: 'Семинар',
    },
    {
        en: 'Therefore',
        ru: 'Поэтому',
    },
    {
        en: 'Thinking',
        ru: 'Мышление',
    },
    {
        en: 'Unwise',
        ru: 'Неразумный',
    },
    {
        en: 'Unwisely',
        ru: 'Неразумно',
    },
    {
        en: 'Well-informed',
        ru: 'Хорошо информированный',
    },
    {
        en: 'Abundantly',
        ru: 'Совершенно, обильно',
    },
    {
        en: 'Applicant',
        ru: 'Претендент',
    },
    {
        en: 'Competence',
        ru: 'Компетентность',
    },
    {
        en: 'Compromise',
        ru: 'Компромисс',
    },
    {
        en: 'Crystal',
        ru: 'Кристальный',
    },
    {
        en: 'Dominate',
        ru: 'Доминировать',
    },
    {
        en: 'Foresee',
        ru: 'Предвидеть',
    },
    {
        en: 'Legend',
        ru: 'Легенда',
    },
    {
        en: 'Misinterpret',
        ru: 'Неправильно интерпретировать',
    },
    {
        en: 'Perk',
        ru: 'Льгота',
    },
    {
        en: 'Riser',
        ru: 'Тот, кто встает',
    },
    {
        en: 'Summarise',
        ru: 'Подводить итог',
    },
    {
        en: 'Thirdly',
        ru: 'В-третьих',
    },
    {
        en: 'Thus',
        ru: 'Таким образом',
    },
    {
        en: 'Uncover',
        ru: 'Раскрывать',
    },
    {
        en: 'Unlike',
        ru: 'В отличие от',
    },
    {
        en: 'Unrealistic',
        ru: 'Нереалистичный',
    },
    {
        en: 'Unveil',
        ru: 'Раскрывать',
    },
    {
        en: 'Workaholic',
        ru: 'Трудоголик',
    },
    {
        en: 'Adequate',
        ru: 'Адекватный, достаточный',
    },
    {
        en: 'Allocation',
        ru: 'Распределение',
    },
    {
        en: 'Aptitude',
        ru: 'Склонность',
    },
    {
        en: 'Deforestation',
        ru: 'Вырубка лесов',
    },
    {
        en: 'Disproportionate',
        ru: 'Непропорциональный',
    },
    {
        en: 'Drunk',
        ru: 'Пьяный',
    },
    {
        en: 'Flashcard',
        ru: 'Флэш карта',
    },
    {
        en: 'Groundless',
        ru: 'Беспочвенный',
    },
    {
        en: 'Horrified',
        ru: 'В ужасе',
    },
    {
        en: 'Humanity',
        ru: 'Человечество',
    },
    {
        en: 'Infinite',
        ru: 'Бесконечный',
    },
    {
        en: 'Lucrative',
        ru: 'Выгодный',
    },
    {
        en: 'Major',
        ru: 'Главный',
    },
    {
        en: 'Miscalculate',
        ru: 'Неверно посчитать',
    },
    {
        en: 'Misinform',
        ru: 'Дезинформировать',
    },
    {
        en: 'Nonetheless',
        ru: 'Тем не менее',
    },
    {
        en: 'Non-traditional',
        ru: 'Нетрадиционный',
    },
    {
        en: 'Obligation',
        ru: 'Обязательство',
    },
    {
        en: 'Prevail',
        ru: 'Преобладать',
    },
    {
        en: 'Reassure',
        ru: 'Заверять',
    },
    {
        en: 'Shadow',
        ru: 'Тень',
    },
    {
        en: 'Simplicity',
        ru: 'Простота',
    },
    {
        en: 'Spontaneously',
        ru: 'Спонтанно',
    },
    {
        en: 'Sufficient',
        ru: 'Достаточный',
    },
    {
        en: 'Suspicion',
        ru: 'Подозрительность',
    },
    {
        en: 'Tension',
        ru: 'Напряженность',
    },
    {
        en: 'Undecided',
        ru: 'Нерешенный',
    },
    {
        en: 'Unsystematic',
        ru: 'Бессистемный',
    },
    {
        en: 'Utmost',
        ru: 'Чрезвычайный',
    },
    {
        en: 'Achievable',
        ru: 'Достижимый',
    },
    {
        en: 'Affect',
        ru: 'Влиять',
    },
    {
        en: 'Capriciously',
        ru: 'Капризно',
    },
    {
        en: 'Consistency',
        ru: 'Последовательность',
    },
    {
        en: 'Consistent',
        ru: 'Последовательный',
    },
    {
        en: 'Convict',
        ru: 'Осуждать',
    },
    {
        en: 'Creatively',
        ru: 'Творчески',
    },
    {
        en: 'Determine',
        ru: 'Определить',
    },
    {
        en: 'Distribution',
        ru: 'Распределение',
    },
    {
        en: 'Doubtless',
        ru: 'Несомненно',
    },
    {
        en: 'Elimination',
        ru: 'Ликвидация',
    },
    {
        en: 'Endure',
        ru: 'Терпеть',
    },
    {
        en: 'Fearlessly',
        ru: 'Бесстрашно',
    },
    {
        en: 'Flexibility',
        ru: 'Гибкость',
    },
    {
        en: 'Foremost',
        ru: 'Прежде всего',
    },
    {
        en: 'Fruitfully',
        ru: 'Плодотворно',
    },
    {
        en: 'Guru',
        ru: 'Гуру',
    },
    {
        en: 'Highlight',
        ru: 'Подчеркнуть',
    },
    {
        en: 'Incomparable',
        ru: 'Несравнимый',
    },
    {
        en: 'Inconsistent',
        ru: 'Противоречивый',
    },
    {
        en: 'Incurable',
        ru: 'Неизлечимый',
    },
    {
        en: 'Indifferently',
        ru: 'Равнодушно',
    },
    {
        en: 'Inexpensively',
        ru: 'Недорого',
    },
    {
        en: 'Innovative',
        ru: 'Инновационный',
    },
    {
        en: 'Intolerable',
        ru: 'Невыносимый',
    },
    {
        en: 'Irregularly',
        ru: 'Нерегулярно',
    },
    {
        en: 'Meteorological',
        ru: 'Метеорологический',
    },
    {
        en: 'Misspell',
        ru: 'Неправильно написать',
    },
    {
        en: 'Overnight',
        ru: 'В одночасье, мгновенный',
    },
    {
        en: 'Pollution',
        ru: 'Загрязнение',
    },
    {
        en: 'Realist',
        ru: 'Реалист',
    },
    {
        en: 'Realistically',
        ru: 'Реалистично, раально',
    },
    {
        en: 'Restore',
        ru: 'Восстановить',
    },
    {
        en: 'Selfishness',
        ru: 'Эгоизм',
    },
    {
        en: 'Shoplifting',
        ru: 'Магазинная кража',
    },
    {
        en: 'Starvation',
        ru: 'Голодание',
    },
    {
        en: 'Trait',
        ru: 'Черта',
    },
    {
        en: 'Unafraid',
        ru: 'Бесстрашный',
    },
    {
        en: 'Unearth',
        ru: 'Раскопать',
    },
    {
        en: 'Unequal',
        ru: 'Неравный',
    },
    {
        en: 'Variety',
        ru: 'Разнообразие',
    },
    {
        en: 'Stress',
        ru: 'Подчеркивать',
    },
    {
        en: 'Respect',
        ru: 'Отношение',
    },
    {
        en: 'Accessible',
        ru: 'Доступный',
    },
    {
        en: 'Adverse',
        ru: 'Неблагоприятный',
    },
    {
        en: 'Alteration',
        ru: 'Изменение',
    },
    {
        en: 'Ambition',
        ru: 'Амбиция',
    },
    {
        en: 'Barbarian',
        ru: 'Варварский',
    },
    {
        en: 'Conversely',
        ru: 'Наоборот',
    },
    {
        en: 'E-book',
        ru: 'Электронная книга',
    },
    {
        en: 'Entertaining',
        ru: 'Развлекательный',
    },
    {
        en: 'Evil',
        ru: 'Зло',
    },
    {
        en: 'Harvest',
        ru: 'Урожай',
    },
    {
        en: 'Intermediary',
        ru: 'Посредник',
    },
    {
        en: 'Irresponsibly',
        ru: 'Безответственно',
    },
    {
        en: 'Leak',
        ru: 'Утечка',
    },
    {
        en: 'Longevity',
        ru: 'Долголетие',
    },
    {
        en: 'Nerve',
        ru: 'Нерв',
    },
    {
        en: 'Radiation',
        ru: 'Радиация',
    },
    {
        en: 'Regarding',
        ru: 'Касательно',
    },
    {
        en: 'Scornful',
        ru: 'Презрительный',
    },
    {
        en: 'Self-evident',
        ru: 'Самоочевидный',
    },
    {
        en: 'Shatter',
        ru: 'Разбить, разрушить',
    },
    {
        en: 'Spectacular',
        ru: 'Захватывающий, вечатляющий',
    },
    {
        en: 'Suspiciously',
        ru: 'Подозрительно',
    },
    {
        en: 'Tedious',
        ru: 'Утомительный',
    },
    {
        en: 'Toddler',
        ru: 'Ребенок, начинающий ходить',
    },
    {
        en: 'Tolerate',
        ru: 'Терпеть',
    },
    {
        en: 'Tribute',
        ru: 'Дань',
    },
    {
        en: 'Youngster',
        ru: 'Молодежь',
    },
    {
        en: 'Will',
        ru: 'Завещание',
    },
    {
        en: 'Agitation',
        ru: 'Агитация',
    },
    {
        en: 'Angle',
        ru: 'Угол',
    },
    {
        en: 'Broadcasting',
        ru: 'Вещание',
    },
    {
        en: 'Challenge',
        ru: 'Вызов',
    },
    {
        en: 'Improbable',
        ru: 'Мловероятный',
    },
    {
        en: 'Phenomenal',
        ru: 'Феноменальный',
    },
    {
        en: 'Propaganda',
        ru: 'Пропаганда',
    },
    {
        en: 'Terminology',
        ru: 'Терминология',
    },
    {
        en: 'Unanimous',
        ru: 'Единогласный',
    },
    {
        en: 'Unauthorized',
        ru: 'Неавторизованный',
    },
    {
        en: 'Unresolved',
        ru: 'Неразрешенный',
    },
    {
        en: 'Unsubscribe',
        ru: 'Отписаться',
    },
    {
        en: 'Whichever',
        ru: 'Какой бы ни',
    },
    {
        en: 'Live',
        ru: 'Вживую, в прямом эфире',
    },
    {
        en: 'Bear',
        ru: 'Терпеть, приносить',
    },
    {
        en: 'Amazingly',
        ru: 'Удивительно',
    },
    {
        en: 'Apparently',
        ru: 'Видимо',
    },
    {
        en: 'Claim',
        ru: 'Требовать, претендовать',
    },
    {
        en: 'Crown',
        ru: 'Завершать, корона',
    },
    {
        en: 'Curriculum',
        ru: 'Учебная программа',
    },
    {
        en: 'Decade',
        ru: 'Десятилетие',
    },
    {
        en: 'Entrance',
        ru: 'Вход, вступительный',
    },
    {
        en: 'Evidently',
        ru: 'Очевидно',
    },
    {
        en: 'Lifelong',
        ru: 'Пожизненный',
    },
    {
        en: 'Likelihood',
        ru: 'Вероятность',
    },
    {
        en: 'Omit',
        ru: 'Пропустить, не включать',
    },
    {
        en: 'Perform',
        ru: 'Выполнить',
    },
    {
        en: 'Pilgrim',
        ru: 'Паломник',
    },
    {
        en: 'Poisonous',
        ru: 'Ядовитый',
    },
    {
        en: 'Predictably',
        ru: 'Предсказуемо',
    },
    {
        en: 'Presumably',
        ru: 'Предположительно',
    },
    {
        en: 'Prosper',
        ru: 'Процветать',
    },
    {
        en: 'Reveal',
        ru: 'Выявлять, раскрывать',
    },
    {
        en: 'Theoretical',
        ru: 'Теоретический',
    },
    {
        en: 'Tourism',
        ru: 'Туризм',
    },
    {
        en: 'Trained',
        ru: 'Тренированный',
    },
    {
        en: 'Upper-intermediate',
        ru: 'Выше среднего',
    },
    {
        en: 'Admission',
        ru: 'Вход, вступительный',
    },
    {
        en: 'Cheerful',
        ru: 'Жизнерадостный',
    },
    {
        en: 'Complicate',
        ru: 'Усложнять',
    },
    {
        en: 'Dispute',
        ru: 'Спор, диспут',
    },
    {
        en: 'Foundation',
        ru: 'Основание',
    },
    {
        en: 'Importantly',
        ru: 'Важно',
    },
    {
        en: 'Increasingly',
        ru: 'Все более',
    },
    {
        en: 'Junior',
        ru: 'Юношеский, юниорский',
    },
    {
        en: 'Lab',
        ru: 'Лаборатория',
    },
    {
        en: 'Largely',
        ru: 'В основном',
    },
    {
        en: 'Minority',
        ru: 'Меньшинство',
    },
    {
        en: 'Notwithstanding',
        ru: 'Несмотря на',
    },
    {
        en: 'Odd',
        ru: 'Странный',
    },
    {
        en: 'Paradoxical',
        ru: 'Парадоксальный',
    },
    {
        en: 'Paradoxically',
        ru: 'Парадоксально',
    },
    {
        en: 'Peak',
        ru: 'Вершина, пик',
    },
    {
        en: 'Permanent',
        ru: 'Постоянный',
    },
    {
        en: 'Regrettably',
        ru: 'К сожалению',
    },
    {
        en: 'Remarkable',
        ru: 'Удивительный',
    },
    {
        en: 'Revolutionise',
        ru: 'Произвести революцию',
    },
    {
        en: 'Similarity',
        ru: 'Сходство',
    },
    {
        en: 'Ultimately',
        ru: 'В конечно счёте',
    },
    {
        en: 'Undermine',
        ru: 'Подрывать',
    },
    {
        en: 'Undetermined',
        ru: 'Нерешительный',
    },
    {
        en: 'Additionally',
        ru: 'Кроме того, дополнительно',
    },
    {
        en: 'Admittedly',
        ru: 'Предположительно',
    },
    {
        en: 'Broadly',
        ru: 'Широко',
    },
    {
        en: 'Conscience',
        ru: 'Совесть',
    },
    {
        en: 'Consuming',
        ru: 'Трудоемкий, потребляющий',
    },
    {
        en: 'Conviction',
        ru: 'Убеждение',
    },
    {
        en: 'Curiously',
        ru: 'Любопытно',
    },
    {
        en: 'Fabulous',
        ru: 'Беснословный',
    },
    {
        en: 'Fluent',
        ru: 'Беглый, свободный',
    },
    {
        en: 'Founder',
        ru: 'Основатель',
    },
    {
        en: 'Funnily',
        ru: 'Забавно, странно',
    },
    {
        en: 'Intentionally',
        ru: 'Намеренно',
    },
    {
        en: 'Irrespective',
        ru: 'Независимо',
    },
    {
        en: 'Oddly',
        ru: 'Странно',
    },
    {
        en: 'Token',
        ru: 'Знак, символ',
    },
    {
        en: 'Undergo',
        ru: 'Подвергаться, испытывать',
    },
    {
        en: 'Unintentionally',
        ru: 'Непреднамеренно',
    },
    {
        en: 'Unite',
        ru: 'Объединять',
    },
    {
        en: 'Unstoppable',
        ru: 'Неостановимый',
    },
    {
        en: 'Applied',
        ru: 'Прикладной',
    },
    {
        en: 'Availability',
        ru: 'Доступность',
    },
    {
        en: 'Brilliantly',
        ru: 'Блестяще',
    },
    {
        en: 'Commerce',
        ru: 'Коммерция',
    },
    {
        en: 'Completion',
        ru: 'Завершение',
    },
    {
        en: 'Countless',
        ru: 'Бесчисленный',
    },
    {
        en: 'Density',
        ru: 'Плотность',
    },
    {
        en: 'Diversity',
        ru: 'Разнообразие',
    },
    {
        en: 'Dramatically',
        ru: 'Резко, драматически',
    },
    {
        en: 'Encounter',
        ru: 'Сталкиваться',
    },
    {
        en: 'Equality',
        ru: 'Равенство',
    },
    {
        en: 'Essence',
        ru: 'Сущность',
    },
    {
        en: 'Excursion',
        ru: 'Экскурсия',
    },
    {
        en: 'Explicit',
        ru: 'Четкий',
    },
    {
        en: 'Extinction',
        ru: 'Вымирание',
    },
    {
        en: 'Forum',
        ru: 'Форум',
    },
    {
        en: 'Healthily',
        ru: 'Здорово, правильно',
    },
    {
        en: 'Misfortune',
        ru: 'Беда',
    },
    {
        en: 'PE',
        ru: 'Физкультура',
    },
    {
        en: 'Pedagogy',
        ru: 'Педагогика',
    },
    {
        en: 'Rehearsal',
        ru: 'Репетиция',
    },
    {
        en: 'Repetition',
        ru: 'Повторение',
    },
    {
        en: 'Sponsor',
        ru: 'Спонсор',
    },
    {
        en: 'Sponsorship',
        ru: 'Спонсорство',
    },
    {
        en: 'Steadily',
        ru: 'Постоянно, неуклонно',
    },
    {
        en: 'Substantially',
        ru: 'Существенно',
    },
    {
        en: 'Subtle',
        ru: 'Тонкий, едва различимый',
    },
    {
        en: 'Triumph',
        ru: 'Триумф',
    },
    {
        en: 'Understandably',
        ru: 'Понятно',
    },
    {
        en: 'Unfavourable',
        ru: 'Неприятный',
    },
    {
        en: 'Whatsoever',
        ru: 'Вообще, совершенно',
    },
    {
        en: 'Absurdly',
        ru: 'Абсурдно',
    },
    {
        en: 'Academy',
        ru: 'Академия',
    },
    {
        en: 'Altogether',
        ru: 'Совсем, совершенно',
    },
    {
        en: 'Clarity',
        ru: 'Ясность',
    },
    {
        en: 'Clumsiness',
        ru: 'Неуклюжесть',
    },
    {
        en: 'Coherence',
        ru: 'Последовательность',
    },
    {
        en: 'Cohesion',
        ru: 'Связность',
    },
    {
        en: 'Colloquial',
        ru: 'Разговорный',
    },
    {
        en: 'Colourless',
        ru: 'Бесцветный',
    },
    {
        en: 'Disappointing',
        ru: 'Разочаровывающий',
    },
    {
        en: 'Fanaticism',
        ru: 'Фанатизм',
    },
    {
        en: 'Honorary',
        ru: 'Почетный',
    },
    {
        en: 'Inclination',
        ru: 'Желание',
    },
    {
        en: 'Incomplete',
        ru: 'Неполный',
    },
    {
        en: 'Innumerable',
        ru: 'Бесчисленный',
    },
    {
        en: 'Irreparable',
        ru: 'Непоправимый',
    },
    {
        en: 'Outweigh',
        ru: 'Перевешивать',
    },
    {
        en: 'Overshadow',
        ru: 'Затмевать',
    },
    {
        en: 'Overstep',
        ru: 'Переступать',
    },
    {
        en: 'Phrasal',
        ru: 'Фразовый',
    },
    {
        en: 'Preferable',
        ru: 'Предпочтительный',
    },
    {
        en: 'Prepay',
        ru: 'Платить вперед',
    },
    {
        en: 'Protective',
        ru: 'Защитный',
    },
    {
        en: 'Recession',
        ru: 'Спад, рецессия',
    },
    {
        en: 'Renewable',
        ru: 'Возобновляемый',
    },
    {
        en: 'Researcher',
        ru: 'Исследователь',
    },
    {
        en: 'Revival',
        ru: 'Оживление',
    },
    {
        en: 'Revive',
        ru: 'Оживать',
    },
    {
        en: 'Scrupulously',
        ru: 'Скурпулезно',
    },
    {
        en: 'Stagnation',
        ru: 'Стагнация',
    },
    {
        en: 'Storyteller',
        ru: 'Рассказчик',
    },
    {
        en: 'Straighten',
        ru: 'Выпрямлять',
    },
    {
        en: 'Supplementary',
        ru: 'Дополнительный',
    },
    {
        en: 'Trade',
        ru: 'Торговля',
    },
    {
        en: 'Tranquil',
        ru: 'Спокойный',
    },
    {
        en: 'Unfit',
        ru: 'Непригодный, нездоровый',
    },
    {
        en: 'Unhealthy',
        ru: 'Нездоровый',
    },
    {
        en: 'Unprotected',
        ru: 'Незащищенный',
    },
    {
        en: 'Unsafe',
        ru: 'Небезопасный',
    },
    {
        en: 'Accordance',
        ru: 'Соответствие',
    },
    {
        en: 'Astonishingly',
        ru: 'Удивительно',
    },
    {
        en: 'Boastful',
        ru: 'Хвастливый',
    },
    {
        en: 'Bureaucratic',
        ru: 'Бюрократический',
    },
    {
        en: 'Co-founder',
        ru: 'Соучредитель',
    },
    {
        en: 'Comprehension',
        ru: 'Понимание',
    },
    {
        en: 'Comprehensive',
        ru: 'Исчерпывающий, образовательный',
    },
    {
        en: 'Diligently',
        ru: 'Усердно',
    },
    {
        en: 'Disheartening',
        ru: 'Удручающий',
    },
    {
        en: 'Disrespectful',
        ru: 'Неуважительный',
    },
    {
        en: 'Disrespectfully',
        ru: 'Неуважительно',
    },
    {
        en: 'Eradication',
        ru: 'Искоренение',
    },
    {
        en: 'Excessive',
        ru: 'Чрезмерный',
    },
    {
        en: 'Fashionably',
        ru: 'Модно',
    },
    {
        en: 'Greatness',
        ru: 'Величие',
    },
    {
        en: 'Indescribable',
        ru: 'Неописуемый',
    },
    {
        en: 'Insensitive',
        ru: 'Бесчувственное',
    },
    {
        en: 'Insignificance',
        ru: 'Незначительность',
    },
    {
        en: 'Installation',
        ru: 'Установка',
    },
    {
        en: 'Irreversible',
        ru: 'Необратимый',
    },
    {
        en: 'Irritably',
        ru: 'Раздраженно',
    },
    {
        en: 'Irritation',
        ru: 'Раздражение',
    },
    {
        en: 'Linguist',
        ru: 'Лингвист',
    },
    {
        en: 'Mismanagement',
        ru: 'Неправильное управление',
    },
    {
        en: 'Murmur',
        ru: 'Бормотать',
    },
    {
        en: 'Presence',
        ru: 'Присутсивие',
    },
    {
        en: 'Reconsider',
        ru: 'Пересмотреть',
    },
    {
        en: 'Respectful',
        ru: 'Уважительный',
    },
    {
        en: 'Romantically',
        ru: 'Романтически',
    },
    {
        en: 'Shareholder',
        ru: 'Акционер',
    },
    {
        en: 'Sorrow',
        ru: 'Неприятность',
    },
    {
        en: 'Stabilize',
        ru: 'Стабилизировать',
    },
    {
        en: 'Suspect',
        ru: 'Подозревать',
    },
    {
        en: 'Uncertainty',
        ru: 'Неопределенность',
    },
    {
        en: 'Uninstall',
        ru: 'Удалить',
    },
    {
        en: 'Unmanageable',
        ru: 'Неуправляемый',
    },
    {
        en: 'Unsuitable',
        ru: 'Неподходящий',
    },
    {
        en: 'Visibility',
        ru: 'Видимость',
    },
    {
        en: 'Well-balanced',
        ru: 'Хорошо сбалансированный',
    },
    {
        en: 'Well-organized',
        ru: 'Хорошо организованный',
    },
    {
        en: 'Well-qualified',
        ru: 'Высоко квалифицированный',
    },
    {
        en: 'Anti-virus',
        ru: 'Антивирус',
    },
    {
        en: 'Beggar',
        ru: 'Нищий, попрошайка',
    },
    {
        en: 'Clarification',
        ru: 'Разъяснение',
    },
    {
        en: 'Continuation',
        ru: 'Продолжение',
    },
    {
        en: 'Encouragement',
        ru: 'Поддержка',
    },
    {
        en: 'Faithfulness',
        ru: 'Верность',
    },
    {
        en: 'Fantasy',
        ru: 'Фантазия',
    },
    {
        en: 'Fist',
        ru: 'Кулак',
    },
    {
        en: 'Immoral',
        ru: 'Аморальный',
    },
    {
        en: 'Imperfect',
        ru: 'Несовершенный',
    },
    {
        en: 'Improper',
        ru: 'Неуместный',
    },
    {
        en: 'Imprudent',
        ru: 'Неосторожный',
    },
    {
        en: 'Irrational',
        ru: 'Иррациональный',
    },
    {
        en: 'Irregularity',
        ru: 'Нерегулярность',
    },
    {
        en: 'Modernize',
        ru: 'Модернизировать',
    },
    {
        en: 'Novelty',
        ru: 'Новизна',
    },
    {
        en: 'Participation',
        ru: 'Участие',
    },
    {
        en: 'Publication',
        ru: 'Публикация',
    },
    {
        en: 'Retake',
        ru: 'Переснимать',
    },
    {
        en: 'Self-esteem',
        ru: 'Самооценка',
    },
    {
        en: 'Simplify',
        ru: 'Упрощать',
    },
    {
        en: 'Software',
        ru: 'Программное обеспечение',
    },
    {
        en: 'Staggered',
        ru: 'Пораженный',
    },
    {
        en: 'Stubbornness',
        ru: 'Упрямство',
    },
    {
        en: 'Unambitious',
        ru: 'Не амбициозный',
    },
    {
        en: 'Well-developed',
        ru: 'Хорошо развитый',
    },
    {
        en: 'Width',
        ru: 'Ширина',
    },
    {
        en: 'Birth',
        ru: 'Рождение',
    },
    {
        en: 'Heaven',
        ru: 'Небо',
    },
    {
        en: 'Iceberg',
        ru: 'Айсберг',
    },
    {
        en: 'Lesser',
        ru: 'Меньший',
    },
    {
        en: 'Single-room',
        ru: 'Однокомнатный',
    },
    {
        en: 'Spirit',
        ru: 'Дух',
    },
    {
        en: 'Tape',
        ru: 'Лента',
    },
    {
        en: 'Beans',
        ru: 'Фасоль',
    },
    {
        en: 'Blessing',
        ru: 'Благословение',
    },
    {
        en: 'Bull',
        ru: 'Бык',
    },
    {
        en: 'China shop',
        ru: 'Посудная лавка',
    },
    {
        en: 'Clumsy',
        ru: 'Неуклюжий',
    },
    {
        en: 'Disguise',
        ru: 'Маскировка',
    },
    {
        en: 'Dump',
        ru: 'Свалка',
    },
    {
        en: 'Fiddle',
        ru: 'Скрипка',
    },
    {
        en: 'Grip',
        ru: 'Схватить',
    },
    {
        en: 'Master',
        ru: 'Мастер',
    },
    {
        en: 'Rag',
        ru: 'Тряпка',
    },
    {
        en: 'Riches',
        ru: 'Богатство',
    },
    {
        en: 'Spur',
        ru: 'Побуждать',
    },
    {
        en: 'Swing',
        ru: 'Качать',
    },
    {
        en: 'Tighten',
        ru: 'Затянуть',
    },
    {
        en: 'Credit',
        ru: 'Кредит',
    },
    {
        en: 'Glasses',
        ru: 'Очки',
    },
    {
        en: 'Spoon',
        ru: 'Ложка',
    },
    {
        en: 'Act',
        ru: 'Действовать, акт',
    },
    {
        en: 'Salmon',
        ru: 'Лосось',
    },
    {
        en: 'Cooker',
        ru: 'Плита',
    },
    {
        en: 'Suitcase',
        ru: 'Чемодан',
    },
    {
        en: 'Subway',
        ru: 'Метро, подземка',
    },
    {
        en: 'Elections',
        ru: 'Выборы',
    },
    {
        en: 'Rubber',
        ru: 'Ластик',
    },
    {
        en: 'Alike',
        ru: 'Похожий, одинаково',
    },
    {
        en: 'Administration',
        ru: 'Администрация',
    },
    {
        en: 'Petrol',
        ru: 'Бензин',
    },
    {
        en: 'Frame',
        ru: 'Рамка, рама',
    },
    {
        en: 'Guard',
        ru: 'Охрана, стража',
    },
    {
        en: 'Opera',
        ru: 'Опера',
    },
    {
        en: 'Sauce',
        ru: 'Соус',
    },
    {
        en: 'Stomach',
        ru: 'Живот, желудок',
    },
    {
        en: 'Section',
        ru: 'Секция, раздел',
    },
    {
        en: 'Dolphin',
        ru: 'Дельфин',
    },
    {
        en: 'Blanket',
        ru: 'Одеяло',
    },
    {
        en: 'Combination',
        ru: 'Сочетание',
    },
    {
        en: 'Swimsuit',
        ru: 'Купальник',
    },
    {
        en: 'Deaf',
        ru: 'Глухой',
    },
    {
        en: 'Chef',
        ru: 'Шеф-повар',
    },
    {
        en: 'Heroic',
        ru: 'Героический',
    },
    {
        en: 'Cupboard',
        ru: 'Шкаф, буфет',
    },
    {
        en: 'Pilot',
        ru: 'Пилот',
    },
    {
        en: 'Quiz',
        ru: 'Викторина, опрос',
    },
    {
        en: 'Digital',
        ru: 'Цифровой',
    },
    {
        en: 'Board',
        ru: 'Доска',
    },
    {
        en: 'Sunglasses',
        ru: 'Солнцезащитные очки',
    },
    {
        en: 'Costume',
        ru: 'Костюм',
    },
    {
        en: 'Queen',
        ru: 'Королева',
    },
    {
        en: 'Represent',
        ru: 'Представлять',
    },
    {
        en: 'Mouse',
        ru: 'Мышь, мышка',
    },
    {
        en: 'Gun',
        ru: 'Ружье',
    },
    {
        en: 'Chemist',
        ru: 'Аптекарь, химик',
    },
    {
        en: 'Leader',
        ru: 'Лидер',
    },
    {
        en: 'Borrow',
        ru: 'Занимать',
    },
    {
        en: 'Shampoo',
        ru: 'Шампунь',
    },
    {
        en: 'Bee',
        ru: 'Пчела',
    },
    {
        en: 'Pepper',
        ru: 'Перец',
    },
    {
        en: 'Keyboard',
        ru: 'Клавиатура',
    },
    {
        en: 'Bother',
        ru: 'Беспокоить',
    },
    {
        en: 'Scanner',
        ru: 'Сканер',
    },
    {
        en: 'Aloud',
        ru: 'Вслух',
    },
    {
        en: 'Raincoat',
        ru: 'Плащ',
    },
    {
        en: 'Anywhere',
        ru: 'В любом месте',
    },
    {
        en: 'Calendar',
        ru: 'Календарь',
    },
    {
        en: 'Yoghurt',
        ru: 'Йогурт',
    },
    {
        en: 'Wing',
        ru: 'Крыло',
    },
    {
        en: 'Scene',
        ru: 'Сцена',
    },
    {
        en: 'Watermelon',
        ru: 'Арбуз',
    },
    {
        en: 'Concept',
        ru: 'Концепция, понятие',
    },
    {
        en: 'Butcher',
        ru: 'Мясник',
    },
    {
        en: 'Purple',
        ru: 'Фиолетовый',
    },
    {
        en: 'Pedestrian',
        ru: 'Пешеход',
    },
    {
        en: 'Police station',
        ru: 'Полицейский участок',
    },
    {
        en: 'Branch',
        ru: 'Ветка, филиал',
    },
    {
        en: 'Second-hand',
        ru: 'Подержанный',
    },
    {
        en: 'Manufacturer',
        ru: 'Производитель',
    },
    {
        en: 'Shore',
        ru: 'Берег',
    },
    {
        en: 'Occupy',
        ru: 'Занимать',
    },
    {
        en: 'Essentially',
        ru: 'По существу',
    },
    {
        en: 'Hunter',
        ru: 'Охотник',
    },
    {
        en: 'Consultant',
        ru: 'Консультант',
    },
    {
        en: 'Rhythm',
        ru: 'Ритм',
    },
    {
        en: 'Soul',
        ru: 'Душа',
    },
    {
        en: 'Nose',
        ru: 'Нос',
    },
    {
        en: 'Split',
        ru: 'Разделить',
    },
    {
        en: 'Poetry',
        ru: 'Поэзия',
    },
    {
        en: 'Captain',
        ru: 'Капитан',
    },
    {
        en: 'Politician',
        ru: 'Политик',
    },
    {
        en: 'Potato',
        ru: 'Картофель',
    },
    {
        en: 'Leadership',
        ru: 'Руководство, лидерство',
    },
    {
        en: 'Pregnancy',
        ru: 'Беременность',
    },
    {
        en: 'Satellite',
        ru: 'Спутник, спутниковый',
    },
    {
        en: 'Expansion',
        ru: 'Расширение, экспансия',
    },
    {
        en: 'Recall',
        ru: 'Вспоминать, отменять',
    },
    {
        en: 'Proposed',
        ru: 'Предложенный',
    },
    {
        en: 'Bowl',
        ru: 'Чаша, миска',
    },
    {
        en: 'Substance',
        ru: 'Вещество',
    },
    {
        en: 'Consume',
        ru: 'Потреблять',
    },
    {
        en: 'Prompt',
        ru: 'Быстрый',
    },
    {
        en: 'Attorney',
        ru: 'Адвокат',
    },
    {
        en: 'Coalition',
        ru: 'Коалиция',
    },
    {
        en: 'Fighter',
        ru: 'Боец, борец',
    },
    {
        en: 'Union',
        ru: 'Союз',
    },
    {
        en: 'Provision',
        ru: 'Обеспечение',
    },
    {
        en: 'Revenue',
        ru: 'Доход',
    },
    {
        en: 'Bean',
        ru: 'Фасоль, боб',
    },
    {
        en: 'Opening',
        ru: 'Открытие',
    },
    {
        en: 'Settle',
        ru: 'Уладить, селиться',
    },
    {
        en: 'Fundamental',
        ru: 'Фундаментальный',
    },
    {
        en: 'Grave',
        ru: 'Могила',
    },
    {
        en: 'Abuse',
        ru: 'Злоупотреблять, злоупотребление',
    },
    {
        en: 'Editor',
        ru: 'Редактор',
    },
    {
        en: 'Violent',
        ru: 'Насильственный, жестокий',
    },
    {
        en: 'Boundary',
        ru: 'Граница',
    },
    {
        en: 'Grain',
        ru: 'Зерно',
    },
    {
        en: 'Pile',
        ru: 'Куча, груда',
    },
    {
        en: 'Coal',
        ru: 'Уголь',
    },
    {
        en: 'Pipe',
        ru: 'Труба',
    },
    {
        en: 'Consciousness',
        ru: 'Сознание',
    },
    {
        en: 'Invasion',
        ru: 'Вторжение, нападение',
    },
    {
        en: 'Negotiate',
        ru: 'Вести переговоры, договариваться',
    },
    {
        en: 'Transformation',
        ru: 'Преобразование',
    },
    {
        en: 'Elect',
        ru: 'Избирать, выбирать',
    },
    {
        en: 'Index',
        ru: 'Индекс',
    },
    {
        en: 'Tail',
        ru: 'Хвост',
    },
    {
        en: 'Telescope',
        ru: 'Телескоп',
    },
    {
        en: 'Impose',
        ru: 'Налагать',
    },
    {
        en: 'Evaluation',
        ru: 'Оценка',
    },
    {
        en: 'Script',
        ru: 'Сценарий',
    },
    {
        en: 'Leaf',
        ru: 'Лист',
    },
    {
        en: 'Label',
        ru: 'Этикетка, ярлык',
    },
    {
        en: 'Agricultural',
        ru: 'Сельскохозяйственный',
    },
    {
        en: 'Loose',
        ru: 'Свободный',
    },
    {
        en: 'Origin',
        ru: 'Происхождение',
    },
    {
        en: 'Formation',
        ru: 'Образование',
    },
    {
        en: 'Joint',
        ru: 'Совместный, сустав',
    },
    {
        en: 'Compose',
        ru: 'Составлять, сочинять',
    },
    {
        en: 'Frequency',
        ru: 'Частота',
    },
    {
        en: 'Representative',
        ru: 'Предствитель',
    },
    {
        en: 'Selection',
        ru: 'Выбор',
    },
    {
        en: 'Corn',
        ru: 'Кукуруза',
    },
    {
        en: 'Chart',
        ru: 'Диаграмма, график',
    },
    {
        en: 'Motor',
        ru: 'Мотор, двигатель',
    },
    {
        en: 'Activist',
        ru: 'Активист',
    },
    {
        en: 'Downtown',
        ru: 'Центр города',
    },
    {
        en: 'Raw',
        ru: 'Сырье, сырой',
    },
    {
        en: 'Adviser',
        ru: 'Консультант',
    },
    {
        en: 'Manufacturing',
        ru: 'Производство',
    },
    {
        en: 'Enable',
        ru: 'Позволять, включать',
    },
    {
        en: 'Protein',
        ru: 'Белок, протеин',
    },
    {
        en: 'Embrace',
        ru: 'Обнимать',
    },
    {
        en: 'Decline',
        ru: 'Снижение, отклонить',
    },
    {
        en: 'Headline',
        ru: 'Заголовок',
    },
    {
        en: 'Destruction',
        ru: 'Разрушение',
    },
    {
        en: 'Reference',
        ru: 'Ссылка, сноска',
    },
    {
        en: 'Deer',
        ru: 'Олень',
    },
    {
        en: 'Scholar',
        ru: 'Ученый',
    },
    {
        en: 'Tragedy',
        ru: 'Трагедия',
    },
    {
        en: 'Commander',
        ru: 'Командир',
    },
    {
        en: 'Minister',
        ru: 'Министр',
    },
    {
        en: 'Symbol',
        ru: 'Символ',
    },
    {
        en: 'Coach',
        ru: 'Тренер, автобус',
    },
    {
        en: 'Holy',
        ru: 'Святой',
    },
    {
        en: 'Journal',
        ru: 'Журнал',
    },
    {
        en: 'Gently',
        ru: 'Осторожно, мягко',
    },
    {
        en: 'Contemporary',
        ru: 'Современный',
    },
    {
        en: 'Administrator',
        ru: 'Администратор',
    },
    {
        en: 'Root',
        ru: 'Корень',
    },
    {
        en: 'Column',
        ru: 'Колонка, колонна',
    },
    {
        en: 'Naked',
        ru: 'Обнаженный',
    },
    {
        en: 'Strategic',
        ru: 'Стратегический',
    },
    {
        en: 'Regime',
        ru: 'Режим',
    },
    {
        en: 'Celebration',
        ru: 'Празднование',
    },
    {
        en: 'Mixture',
        ru: 'Смесь',
    },
    {
        en: 'Carrier',
        ru: 'Перевозчик',
    },
    {
        en: 'County',
        ru: 'Округ',
    },
    {
        en: 'Entry',
        ru: 'Вход',
    },
    {
        en: 'Fate',
        ru: 'Судьба, участь',
    },
    {
        en: 'Grocery',
        ru: 'Продуктовый',
    },
    {
        en: 'Institution',
        ru: 'Учреждение',
    },
    {
        en: 'Stock',
        ru: 'Запас, фондовый',
    },
    {
        en: 'Crane',
        ru: 'Кран',
    },
    {
        en: 'Prime',
        ru: 'Основной, главный',
    },
    {
        en: 'Blade',
        ru: 'Лезвие',
    },
    {
        en: 'Patch',
        ru: 'Заплатка',
    },
    {
        en: 'Negotiation',
        ru: 'Переговоры',
    },
    {
        en: 'Threaten',
        ru: 'Угрожать',
    },
    {
        en: 'Priest',
        ru: 'Священник',
    },
    {
        en: 'Nowhere',
        ru: 'Нигде, некуда',
    },
    {
        en: 'Intervention',
        ru: 'Вмешательство, интервенция',
    },
    {
        en: 'Chairman',
        ru: 'Председатель',
    },
    {
        en: 'Oppose',
        ru: 'Выступать против, противиться',
    },
    {
        en: 'Explosion',
        ru: 'Взрыв',
    },
    {
        en: 'Reflection',
        ru: 'Отражение',
    },
    {
        en: 'Industrial',
        ru: 'Промышленный',
    },
    {
        en: 'Crop',
        ru: 'Урожай',
    },
    {
        en: 'Rating',
        ru: 'Рейтинг',
    },
    {
        en: 'Partnership',
        ru: 'Пратнёрство',
    },
    {
        en: 'Trace',
        ru: 'След',
    },
    {
        en: 'Recruit',
        ru: 'Набирать',
    },
    {
        en: 'Aid',
        ru: 'Помощь',
    },
    {
        en: 'Coverage',
        ru: 'Покрытие, охват',
    },
    {
        en: 'Personality',
        ru: 'Личность',
    },
    {
        en: 'Slice',
        ru: 'Ломтик',
    },
    {
        en: 'Urban',
        ru: 'Городской',
    },
    {
        en: 'Define',
        ru: 'Определять',
    },
    {
        en: 'Desperate',
        ru: 'Отчаянный',
    },
    {
        en: 'Generate',
        ru: 'Генерировать, производить',
    },
    {
        en: 'Sample',
        ru: 'Образец',
    },
    {
        en: 'Funding',
        ru: 'Финансирование',
    },
    {
        en: 'Witness',
        ru: 'Свидетель',
    },
    {
        en: 'Wound',
        ru: 'Рана, ранить',
    },
    {
        en: 'Recipe',
        ru: 'Рецепт',
    },
    {
        en: 'Owner',
        ru: 'Владелец',
    },
    {
        en: 'Rough',
        ru: 'Грубый',
    },
    {
        en: 'Switch',
        ru: 'Переключать, переключатель',
    },
    {
        en: 'Intense',
        ru: 'Интенсивный',
    },
    {
        en: 'Utility',
        ru: 'Полезность, коммунальные услуги',
    },
    {
        en: 'Struggle',
        ru: 'Стараться изо всех сил, бороться',
    },
    {
        en: 'Evolution',
        ru: 'Эволюция',
    },
    {
        en: 'Horror',
        ru: 'Ужас',
    },
    {
        en: 'Flame',
        ru: 'Плямя',
    },
    {
        en: 'Penalty',
        ru: 'Штраф, пенальти',
    },
    {
        en: 'Senior',
        ru: 'Старший',
    },
    {
        en: 'Monitor',
        ru: 'Монитор, мониторить',
    },
    {
        en: 'Drama',
        ru: 'Драма, пьеса',
    },
    {
        en: 'Faculty',
        ru: 'Факультет',
    },
    {
        en: 'Investigator',
        ru: 'Следователь, исследователь',
    },
    {
        en: 'Carbon',
        ru: 'Углерод',
    },
    {
        en: 'Everyday',
        ru: 'Ежедневный',
    },
    {
        en: 'Wrap',
        ru: 'Заворачивать',
    },
    {
        en: 'Expose',
        ru: 'Подвергать',
    },
    {
        en: 'Muscle',
        ru: 'Мускул, мышца',
    },
    {
        en: 'Interpret',
        ru: 'Интерпретировать',
    },
    {
        en: 'Conservative',
        ru: 'Консервативный',
    },
    {
        en: 'Legislation',
        ru: 'Законодательство',
    },
    {
        en: 'Profile',
        ru: 'Профиль',
    },
    {
        en: 'Constitute',
        ru: 'Составлять',
    },
    {
        en: 'Variation',
        ru: 'Изменение, вариация',
    },
    {
        en: 'Inquiry',
        ru: 'Запрос',
    },
    {
        en: 'Remote',
        ru: 'Дистанционный, отдаленный',
    },
    {
        en: 'Nomination',
        ru: 'Назначение, номинация',
    },
    {
        en: 'Ally',
        ru: 'Союзник',
    },
    {
        en: 'Taxpayer',
        ru: 'Налогоплательщик',
    },
    {
        en: 'Detect',
        ru: 'Обнаружить',
    },
    {
        en: 'Disorder',
        ru: 'Беспорядок, расстройство',
    },
    {
        en: 'Prospect',
        ru: 'Перспектива',
    },
    {
        en: 'Bullet',
        ru: 'Пуля',
    },
    {
        en: 'Arise',
        ru: 'Возникать',
    },
    {
        en: 'Silence',
        ru: 'Тишина',
    },
    {
        en: 'Nuclear',
        ru: 'Ядерный',
    },
    {
        en: 'Counter',
        ru: 'Прилавок, касса',
    },
    {
        en: 'Diverse',
        ru: 'Разнообразный, раличный',
    },
    {
        en: 'Tap',
        ru: 'Качание, коснуться',
    },
    {
        en: 'Saving',
        ru: 'Экономия, сбережения',
    },
    {
        en: 'Mode',
        ru: 'Режим',
    },
    {
        en: 'Distinction',
        ru: 'Различие',
    },
    {
        en: 'Shell',
        ru: 'Скорлупа, ракушка',
    },
    {
        en: 'Flow',
        ru: 'Течь, поток',
    },
    {
        en: 'Retain',
        ru: 'Удерживать',
    },
    {
        en: 'Resemble',
        ru: 'Походить, быть похожим',
    },
    {
        en: 'Expense',
        ru: 'Расход, расходы',
    },
    {
        en: 'Violation',
        ru: 'Нарушение',
    },
    {
        en: 'Chase',
        ru: 'Погоня, гнаться',
    },
    {
        en: 'Session',
        ru: 'Заседание, сессия',
    },
    {
        en: 'Chest',
        ru: 'Грудь, сундук',
    },
    {
        en: 'Voter',
        ru: 'Избиратель',
    },
    {
        en: 'Core',
        ru: 'Суть, ядро',
    },
    {
        en: 'Cable',
        ru: 'Кабель',
    },
    {
        en: 'String',
        ru: 'Веревка',
    },
    {
        en: 'Creation',
        ru: 'Создание',
    },
    {
        en: 'Regional',
        ru: 'Региональный',
    },
    {
        en: 'Makeup',
        ru: 'Макияж',
    },
    {
        en: 'Wipe',
        ru: 'Протирать',
    },
    {
        en: 'Assist',
        ru: 'Помогать, содействовать',
    },
    {
        en: 'Democracy',
        ru: 'Демократия',
    },
    {
        en: 'Abandon',
        ru: 'Оставлять, покидать',
    },
    {
        en: 'Package',
        ru: 'Пакет, упаковка',
    },
    {
        en: 'Stroke',
        ru: 'Удар',
    },
    {
        en: 'Embassy',
        ru: 'Посольство',
    },
    {
        en: 'Seal',
        ru: 'Печать, тюлень',
    },
    {
        en: 'Jar',
        ru: 'Кувшин',
    },
    {
        en: 'Butterfly',
        ru: 'Бабочка',
    },
    {
        en: 'Sandals',
        ru: 'Сандалии',
    },
    {
        en: 'Nightmare',
        ru: 'Кошмарный сон',
    },
    {
        en: 'Driving',
        ru: 'Вождение',
    },
    {
        en: 'Alarm',
        ru: 'Тревога, сигнал тревоги',
    },
    {
        en: 'Neat',
        ru: 'Аккуратный, опрятный',
    },
    {
        en: 'Pin',
        ru: 'Булавка, прикрепить, пин',
    },
    {
        en: 'Sightseeing',
        ru: 'Осмотр достопримечательностей',
    },
    {
        en: 'Firework',
        ru: 'Фейерверк, салют',
    },
    {
        en: 'Bride',
        ru: 'Невеста',
    },
    {
        en: 'Pump',
        ru: 'Насос, качать',
    },
    {
        en: 'Nephew',
        ru: 'Племянник',
    },
    {
        en: 'Niece',
        ru: 'Племянница',
    },
    {
        en: 'Hairdresser',
        ru: 'Парикмахер',
    },
    {
        en: 'Puppy',
        ru: 'Щенок',
    },
    {
        en: 'Lemonade',
        ru: 'Лимонад',
    },
    {
        en: 'Explorer',
        ru: 'Исследователь',
    },
    {
        en: 'Peaceful',
        ru: 'Мирный',
    },
    {
        en: 'Cabbage',
        ru: 'Капуста',
    },
    {
        en: 'Departure',
        ru: 'Отъезд',
    },
    {
        en: 'Bucket',
        ru: 'Ведро',
    },
    {
        en: 'Parrot',
        ru: 'Попугай',
    },
    {
        en: 'Relaxation',
        ru: 'Отдых, расслабление',
    },
    {
        en: 'Monster',
        ru: 'Монстр',
    },
    {
        en: 'Republic',
        ru: 'Республика',
    },
    {
        en: 'Criterion',
        ru: 'Критерий',
    },
    {
        en: 'Tram',
        ru: 'Трамвай',
    },
    {
        en: 'Spray',
        ru: 'Спрей',
    },
    {
        en: 'Broccoli',
        ru: 'Брокклоли',
    },
    {
        en: 'Beef',
        ru: 'Говядина',
    },
    {
        en: 'Silk',
        ru: 'Шелк, шелковый',
    },
    {
        en: 'Refund',
        ru: 'Возвращать деньги, возврат',
    },
    {
        en: 'Charming',
        ru: 'Очаровательный',
    },
    {
        en: 'Textbook',
        ru: 'Учебник',
    },
    {
        en: 'Homepage',
        ru: 'Домашняя страница',
    },
    {
        en: 'Cheat',
        ru: 'Списывать, жульничать',
    },
    {
        en: 'Unpack',
        ru: 'Распаковывать',
    },
    {
        en: 'Ant',
        ru: 'Муравей',
    },
    {
        en: 'Bald',
        ru: 'Лысый',
    },
    {
        en: 'Monument',
        ru: 'Памятник',
    },
    {
        en: 'Delicate',
        ru: 'Нежный, деликатный',
    },
    {
        en: 'Recycle',
        ru: 'Перерабатывать',
    },
    {
        en: 'Dive',
        ru: 'Погружение, нырять',
    },
    {
        en: 'Takeaway',
        ru: 'Навынос, готовая еда',
    },
    {
        en: 'Farming',
        ru: 'Сельское хозяйство',
    },
    {
        en: 'Stressed',
        ru: 'Ударный',
    },
    {
        en: 'Formerly',
        ru: 'Раньше, прежде',
    },
    {
        en: 'Quantity',
        ru: 'Количество',
    },
    {
        en: 'Royal',
        ru: 'Королевский',
    },
    {
        en: 'Orchestra',
        ru: 'Оркестр',
    },
    {
        en: 'Nail',
        ru: 'Гвоздь, ноготь',
    },
    {
        en: 'Fur',
        ru: 'Мех',
    },
    {
        en: 'Clap',
        ru: 'Хлопать',
    },
    {
        en: 'Sour',
        ru: 'Кислый',
    },
    {
        en: 'Strawberry',
        ru: 'Клубника',
    },
    {
        en: 'Sleeve',
        ru: 'Рукав',
    },
    {
        en: 'Arrow',
        ru: 'Стрела',
    },
    {
        en: 'Lettuce',
        ru: 'Салат, листья салата',
    },
    {
        en: 'Trunk',
        ru: 'Ствол дерева, туловище',
    },
    {
        en: 'Premises',
        ru: 'Помещение',
    },
    {
        en: 'Insect',
        ru: 'Насекомое',
    },
    {
        en: 'Ending',
        ru: 'Окончание, концовка',
    },
    {
        en: 'Outdoor',
        ru: 'На открытом воздухе',
    },
    {
        en: 'Peanut',
        ru: 'Арахис',
    },
    {
        en: 'Scratch',
        ru: 'Царапина',
    },
    {
        en: 'Elder',
        ru: 'Старший',
    },
    {
        en: 'So-so',
        ru: 'Так себе',
    },
    {
        en: 'Unwell',
        ru: 'Нездоровый',
    },
    {
        en: 'Bulb',
        ru: 'Лампа',
    },
    {
        en: 'Artificially',
        ru: 'Искусственно',
    },
    {
        en: 'Penguin',
        ru: 'Пингвин',
    },
    {
        en: 'Contents',
        ru: 'Содержание',
    },
    {
        en: 'Cliff',
        ru: 'Утес, крутой обрыв',
    },
    {
        en: 'Advert',
        ru: 'Объявление',
    },
    {
        en: 'Postman',
        ru: 'Почтальон',
    },
    {
        en: 'Cruise',
        ru: 'Морское путешествие',
    },
    {
        en: 'Jungle',
        ru: 'Джунгли',
    },
    {
        en: 'Chin',
        ru: 'Подбородок',
    },
    {
        en: 'Cleaner',
        ru: 'Уборщица',
    },
    {
        en: 'Expected',
        ru: 'Ожидаемый',
    },
    {
        en: 'Brochure',
        ru: 'Брошюра',
    },
    {
        en: 'Log',
        ru: 'Бревно',
    },
    {
        en: 'Grilled',
        ru: 'Жареный, гриль',
    },
    {
        en: 'Messy',
        ru: 'Беспорядочный',
    },
    {
        en: 'Booking',
        ru: 'Бронирование, заказ',
    },
    {
        en: 'Spice',
        ru: 'Специя, пряность',
    },
    {
        en: 'Mate',
        ru: 'Приятель, товарищ',
    },
    {
        en: 'Hammer',
        ru: 'Молоток',
    },
    {
        en: 'Frog',
        ru: 'Лягушка',
    },
    {
        en: 'Customs',
        ru: 'Таможня',
    },
    {
        en: 'Leisure',
        ru: 'Досуг, свободное время',
    },
    {
        en: 'Harmony',
        ru: 'Гармония',
    },
    {
        en: 'Flood',
        ru: 'Наводнение, потоп',
    },
    {
        en: 'Pants',
        ru: 'Брюки, штаны',
    },
    {
        en: 'Kangaroo',
        ru: 'Кенгуру',
    },
    {
        en: 'Recycling',
        ru: 'Переработка отходов',
    },
    {
        en: 'Plain',
        ru: 'Простой, равнина',
    },
    {
        en: 'Jug',
        ru: 'Кувшин',
    },
    {
        en: 'Handkerchief',
        ru: 'Носовой платок',
    },
    {
        en: 'Shark',
        ru: 'Акула',
    },
    {
        en: 'Considering',
        ru: 'Учитывая, принимая во внимание',
    },
    {
        en: 'Comma',
        ru: 'Запятая',
    },
    {
        en: 'Kit',
        ru: 'Набор, комплект',
    },
    {
        en: 'Softly',
        ru: 'Мягко, тихо',
    },
    {
        en: 'Kite',
        ru: 'Воздушный змей',
    },
    {
        en: 'Bay',
        ru: 'Залив, бухта',
    },
    {
        en: 'Forbidden',
        ru: 'Запрещено',
    },
    {
        en: 'Ruler',
        ru: 'Линейка, правитель',
    },
    {
        en: 'Coconut',
        ru: 'Кокос',
    },
    {
        en: 'Herb',
        ru: 'Трава',
    },
    {
        en: 'Defence',
        ru: 'Защита',
    },
    {
        en: 'Grape',
        ru: 'Виноград',
    },
    {
        en: 'Skip',
        ru: 'Пропускать',
    },
    {
        en: 'Shallow',
        ru: 'Мелкий',
    },
    {
        en: 'Gamble',
        ru: 'Играть в азартные игры, азартная игра',
    },
    {
        en: 'Stove',
        ru: 'Плита',
    },
    {
        en: 'Unconscious',
        ru: 'Без сознания',
    },
    {
        en: 'Rival',
        ru: 'Соперник',
    },
    {
        en: 'Dishonestly',
        ru: 'Бесчестно',
    },
    {
        en: 'Bush',
        ru: 'Куст',
    },
    {
        en: 'Illegally',
        ru: 'Незаконно',
    },
    {
        en: 'Offence',
        ru: 'Преступление, оскорбление',
    },
    {
        en: 'Controlled',
        ru: 'Контролируемый',
    },
    {
        en: 'Lightly',
        ru: 'Слегка',
    },
    {
        en: 'Jointly',
        ru: 'Совместно',
    },
    {
        en: 'Crisp',
        ru: 'Хрустящий',
    },
    {
        en: 'Sweat',
        ru: 'Пот, потеть',
    },
    {
        en: 'Removal',
        ru: 'Удаление',
    },
    {
        en: 'Chop',
        ru: 'Нарезать',
    },
    {
        en: 'Traditionally',
        ru: 'Традиционно, по традиции',
    },
    {
        en: 'Offend',
        ru: 'Оскорблять, обижать',
    },
    {
        en: 'Nest',
        ru: 'Гнездо',
    },
    {
        en: 'Whistle',
        ru: 'Свисток, свистеть',
    },
    {
        en: 'Willingly',
        ru: 'Охотно',
    },
    {
        en: 'Proudly',
        ru: 'Гордо, с гордостью',
    },
    {
        en: 'Bubble',
        ru: 'Пузырь',
    },
    {
        en: 'Skilled',
        ru: 'Искусный, квалифицированный',
    },
    {
        en: 'Sack',
        ru: 'Мешок, увольнять',
    },
    {
        en: 'Disapproval',
        ru: 'Неодобрение',
    },
    {
        en: 'Glue',
        ru: 'Клей',
    },
    {
        en: 'Feather',
        ru: 'Перо',
    },
    {
        en: 'Inevitably',
        ru: 'Неизбежно',
    },
    {
        en: 'Washing',
        ru: 'Стирка',
    },
    {
        en: 'Amaze',
        ru: 'Поражать, удивлять',
    },
    {
        en: 'Lump',
        ru: 'Кусок',
    },
    {
        en: 'Saucepan',
        ru: 'Кастрюля',
    },
    {
        en: 'Questionnaire',
        ru: 'Опросник',
    },
    {
        en: 'Lighter',
        ru: 'Зажигалка',
    },
    {
        en: 'Hardware',
        ru: 'Оборудование',
    },
    {
        en: 'Babysitter',
        ru: 'Няня',
    },
    {
        en: 'Tablecloth',
        ru: 'Скатерть',
    },
    {
        en: 'Sticky',
        ru: 'Липкий',
    },
    {
        en: 'Lightning',
        ru: 'Молния',
    },
    {
        en: 'Circumstances',
        ru: 'Обстоятельства',
    },
    {
        en: 'Innovation',
        ru: 'Инновация',
    },
    {
        en: 'Evident',
        ru: 'Очевидный, явный',
    },
    {
        en: 'Cargo',
        ru: 'Груз, грузовой',
    },
    {
        en: 'Hardship',
        ru: 'Трудность, лишение',
    },
    {
        en: 'Vinegar',
        ru: 'Уксус',
    },
    {
        en: 'Esteem',
        ru: 'Уважение, уважать',
    },
    {
        en: 'Shrimp',
        ru: 'Креветка',
    },
    {
        en: 'Gloomy',
        ru: 'Мрачный',
    },
    {
        en: 'Dense',
        ru: 'Плотный, густой',
    },
    {
        en: 'Reproduce',
        ru: 'Воспроизводить',
    },
    { en: 'arise arose arisen', ru: 'подниматься' },
    { en: 'awake awoke awoken', ru: 'пробуждать' },
    { en: 'be was (were) been', ru: 'быть' },
    { en: 'bear bore born', ru: 'рожать, переносить' },
    { en: 'beat beat beaten', ru: 'бить' },
    { en: 'become became become', ru: 'становиться' },
    { en: 'begin began begun', ru: 'начинать' },
    { en: 'bend bent bent', ru: 'наклонять' },
    { en: 'bet bet bet', ru: 'заключать пари' },
    { en: 'bind bound bound', ru: 'связывать' },
    { en: 'bite bit bitten', ru: 'кусать' },
    { en: 'bleed bled bled', ru: 'кровоточить' },
    { en: 'blow blew blown', ru: 'дуть' },
    { en: 'break broke broken', ru: 'ломать' },
    { en: 'breed bred bred', ru: 'разводить животных' },
    { en: 'bring brought brought', ru: 'приносить' },
    { en: 'build built built', ru: 'строить' },
    { en: 'buy bought bought', ru: 'покупать' },
    { en: 'catch caught caught', ru: 'ловить' },
    { en: 'choose chose chosen', ru: 'выбирать' },
    { en: 'cling clung clung', ru: 'цепляться' },
    { en: 'come came come', ru: 'приходить' },
    { en: 'cost cost cost', ru: 'стоить' },
    { en: 'cut cut cut', ru: 'резать' },
    { en: 'deal dealt dealt', ru: 'вести дела' },
    { en: 'dig dug dug', ru: 'копать' },
    { en: 'do did done', ru: 'делать' },
    { en: 'draw drew drawn', ru: 'рисовать, тянуть' },
    { en: 'drink drank drunk', ru: 'пить' },
    { en: 'drive drove driven', ru: 'водить автомобиль' },
    { en: 'eat ate eaten', ru: 'кушать' },
    { en: 'fall fell fallen', ru: 'падать' },
    { en: 'feed fed fed', ru: 'кормить' },
    { en: 'feel felt felt', ru: 'чувствовать' },
    { en: 'fight fought fought', ru: 'бороться' },
    { en: 'find found found', ru: 'находить' },
    { en: 'flee fled fled', ru: 'сбегать' },
    { en: 'fly flew flown', ru: 'летать' },
    { en: 'forbid forbade forbidden', ru: 'запрещать' },
    { en: 'forget forgot forgotten', ru: 'забывать' },
    { en: 'forgive forgave forgiven', ru: 'прощать' },
    { en: 'freeze froze frozen', ru: 'замораживать' },
    { en: 'get got got (gotten)', ru: 'получать' },
    { en: 'give gave given', ru: 'давать' },
    { en: 'go went gone', ru: 'идти' },
    { en: 'grow grew grown', ru: 'расти' },
    { en: 'hang hung hung', ru: 'висеть' },
    { en: 'have had had', ru: 'иметь' },
    { en: 'hear heard heard', ru: 'слышать' },
    { en: 'hide hid hidden', ru: 'прятать' },
    { en: 'hit hit hit', ru: 'ударять, попадать' },
    { en: 'hold held held', ru: 'держать' },
    { en: 'hurt hurt hurt', ru: 'причинять боль' },
    { en: 'keep kept kept', ru: 'сохранять, соблюдать' },
    { en: 'know knew known', ru: 'знать' },
    { en: 'lay laid laid', ru: 'класть' },
    { en: 'lead led led', ru: 'вести, лидировать' },
    { en: 'learn learnt (learned) learnt (learned)', ru: 'учиться, узнавать' },
    { en: 'leave left left', ru: 'покидать, оставлять' },
    { en: 'lend lent lent', ru: 'давать взаймы' },
    { en: 'let let let', ru: 'позволять' },
    { en: 'lie lay lain', ru: 'лежать' },
    { en: 'light lit lit', ru: 'зажигать, освещать' },
    { en: 'lose lost lost', ru: 'терять' },
    { en: 'make made made', ru: 'делать, мастерить' },
    { en: 'mean meant meant', ru: 'значить' },
    { en: 'meet met met', ru: 'встречать, знакомиться' },
    { en: 'pay paid paid', ru: 'платить' },
    { en: 'put put put', ru: 'класть, ставить' },
    { en: 'read read read', ru: 'читать' },
    { en: 'ride rode ridden', ru: 'ездить верхом' },
    { en: 'ring rang rung', ru: 'звонить' },
    { en: 'rise rose risen', ru: 'возрастать, подниматься' },
    { en: 'run ran run', ru: 'бежать' },
    { en: 'say said said', ru: 'сказать' },
    { en: 'see saw seen', ru: 'видеть' },
    { en: 'seek sought sought', ru: 'искать' },
    { en: 'sell sold sold', ru: 'продавать' },
    { en: 'send sent sent', ru: 'посылать' },
    { en: 'set set set', ru: 'устанавливать' },
    { en: 'shake shook shaken', ru: 'трясти' },
    { en: 'shine shone shone', ru: 'светить, сиять' },
    { en: 'shoot shot shot', ru: 'стрелять' },
    { en: 'show showed shown', ru: 'показывать' },
    { en: 'shrink shrank shrunk', ru: 'сжиматься' },
    { en: 'shut shut shut', ru: 'закрывать, затворять' },
    { en: 'sing sang sung', ru: 'петь' },
    { en: 'sit sat sat', ru: 'сидеть' },
    { en: 'sleep slept slept', ru: 'спать' },
    { en: 'slide slid slid', ru: 'скользить' },
    { en: 'smell smelt smelt', ru: "пахнуть, нюхать" },
    { en:'speak spoke spoken',ru:'говорить'},
    {en:'spell spelt spelt',ru:'произносить или писать по буквам'},
    {en:'spend spent spent',ru:'тратить, проводить время'},
    {en:'spill spilt spilt',ru:'разлить'},
    {en:'spin spun spun',ru:'крутить'},
    {en:'split split split',ru:'разделять, раскалывать'},
    {en:'spoil spoilt spoilt',ru:'портить'},
    {en:'spread spread spread',ru:'разворачивать, распространять'},
    {en:'stand stood stood',ru:'стоять'},
    {en:'steal stole stolen',ru:'воровать'},
    {en:'sting stung stung',ru:'жалить'},
    {en:'stink stank stunk',ru:'вонять'},
    {en:'strike struck struck',ru:'бастовать, ударять'},
    {en:'swear swore sworn',ru:'клясться, ругаться'},
    {en:'sweep swept swept',ru:'подметать'},
    {en:'swell swelled swollen',ru:'опухать'},
    {en:'swim swam swum',ru:'плавать'},
    {en:'take took taken',ru:'брать'},
    {en:'teach taught taught ',ru:'обучать'},
    {en:'tear tore torn',ru:'рвать'},
    {en:'tell told told',ru:'рассказывать'},
    {en:'think thought thought',ru:'думать'},
    {en:'throw threw thrown',ru:'бросать'},
    {en:'understand understood understood',ru:'понимать'},
    {en:'wake woke woken',ru:'будить'},
    {en:'wear wore worn',ru:'носить (одежду)'},
    {en:'win won won',ru:'побеждать'},
    {en:'wind wound wound',ru:'обматывать, изгибаться'},
    {en:'write wrote written',ru:'писать'},
];

module.exports = words;
