# Дневник разработки Discogs Revisualized: Желаемый функционал

Желаемый функционал приложения

![cover](features_cover.webp)

## Что будет в приложении

### Обёртка над API

Приложение будет использовать обёртку над [API Discogs](https://www.discogs.com/developers), что позволит мне использовать все возможности оригинального `API` для просмотра вишлиста и коллекцией, но с более удобными типами возвращаемых значений и возможностью кэшировать ответы. 

### Просмотр вишлиста

Пользователи смогут легко просматривать любой вишлист виниловых пластинок, включая свой. Вишлист будет отображать всю доступную информацию о релизах, которые тот или иной пользователь хочет приобрести, включая обложку альбома, имя артиста, название альбома, год выпуска и т.д.

### Просмотр коллекции

Приложение также позволит пользователям просматривать текущую коллекцию виниловых пластинок. Все релизы будут организованы и отображены в удобном формате.

### Три вида лэйаута

Приложение будет предлагать три вида лэйаута, аналогичные основному сайту [Discogs.com](http://discogs.com/). Это позволит пользователям выбрать наиболее удобный для них способ отображения информации — в виде сетки, таблицы с картинками или таблицы без картинок.

### Ссылки на профиль и музыкальные релизы

Пользователи смогут перейти на профиль аккаунта на основном сайте, а также на страницу каждого музыкального релиза. Моё приложение будет использоваться только лишь как красивая обертка вишлистов и коллекции, для более подробной информации нужно будет посещать оригинальный сайт.

### Фильтрация данных

Приложение будет поддерживать мощную фильтрацию данных, доступную из [API Discogs](https://www.discogs.com/developers). Пользователи смогут фильтровать свою коллекцию и вишлист по различным критериям, таким как жанр, год выпуска, артист и другие параметры, что позволит быстро находить нужные пластинки. Эти фильтрации можно будет запомнить и передавать их другим пользователям в виде закодированных ссылок.

## Чего не будет в приложении

### Регистрация и авторизация

В приложении не будет возможности регистрации и авторизации пользователей. Я сосредоточусь я на функционале, связанном с отображением коллекциии и вишлистов, используя существующие аккаунты `Discogs`.

### Поиск по коллекции и вишлисту

В приложении не будет встроенного поиска по коллекции и вишлисту. Пользователи смогут просматривать свои списки, но функционал поиска будет отсутствовать, потому что для него требуется авторизация.

### Добавление в коллекцию и вишлист

Пользователи не смогут добавлять новые пластинки в свою коллекцию или вишлист непосредственно через наше приложение. Этот функционал останется на стороне `Discogs`, и все изменения будут происходить через их интерфейс.

### Остальной функционал сайта

Наше приложение не будет включать весь функционал, доступный на основном сайте `Discogs`. Это значит, что такие возможности, как покупка и продажа пластинок, участие в форуме, управление списками друзей и другие специализированные функции останутся за рамками нашего проекта. Мы сфокусируемся на создании удобного интерфейса для просмотра и фильтрации существующих данных из `API Discogs`.

## Приблизительный дизайн

На данный момент я планирую использовать стандартные компоненты из [Ant Design](https://ant.design/) для начальной версии приложения. Это позволит быстро создать пользовательский интерфейс с современным и удобным дизайном.

Я буду настраивать компоненты `Ant Design` для обеспечения адаптивности интерфейса, чтобы приложение корректно отображалось на различных устройствах, включая мобильные телефоны, планшеты и десктопы.

В будущем, по мере развития проекта, планируется кастомизация и расширение компонентов `Ant Design` для соответствия уникальным требованиям приложения и улучшения визуальной идентификации.