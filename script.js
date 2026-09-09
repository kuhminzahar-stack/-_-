const dictionaryData = {
    dialects: {
        title: "Вправа 1 (на вибір). Укладіть словник-мінімум діалектизмів, які вживають у вашому регіоні.",
        rules: "Словник має налічувати мінімум 20 діалектних слів. До діалектизмів потрібно дібрати синоніми з літературної мови. За потреби додати докладне пояснення.",
        headers: ["Діалектне слово", "Літературний синонім", "Докладне пояснення"],
        words: [
            { word: "Мешти", syn: "Туфлі", desc: "Взуття, переважно чоловічі або жіночі черевики." },
            { word: "Філіжанка", syn: "Чашка", desc: "Невелика посудина, з якої п'ють каву або чай." },
            { word: "Пательня", syn: "Сковорідка", desc: "Посуд для смаження їжі." },
            { word: "Ровер", syn: "Велосипед", desc: "Двоколісний транспортний засіб." },
            { word: "Файно", syn: "Добре, гарно", desc: "Вираження позитивної оцінки." },
            { word: "Гальба", syn: "Кухоль", desc: "Велика склянка або чашка, зазвичай для пива." },
            { word: "Коцик", syn: "Ковдра", desc: "Тепле покривало." },
            { word: "Тремпель", syn: "Вішалка", desc: "Пристрій для вішання одягу." },
            { word: "Брама", syn: "Ворота", desc: "Великі двері в паркані або стіні." },
            { word: "Плай", syn: "Гірська стежка", desc: "Стежка в горах (поширено в Карпатах)." }
        ]
    },
    slang: {
        title: "Вправа 2 (на вибір). Укладіть словник-мінімум молодіжного сленгу, який ви використовуєте в повсякденному мовленні.",
        rules: "Словник має налічувати мінімум 20 слів. До сленгізмів потрібно дібрати синоніми з літературної мови. За потреби додати докладне пояснення.",
        headers: ["Сленг", "Літературний синонім", "Значення / Пояснення"],
        words: [
            { word: "Крінж", syn: "Сором, збентеження", desc: "Відчуття сильного сорому за дії іншої людини." },
            { word: "Краш", syn: "Об'єкт симпатії", desc: "Людина, яка дуже подобається, в яку раптово закохалися." },
            { word: "Чілити", syn: "Відпочивати", desc: "Розслаблятися, нічого не робити." },
            { word: "Вайб", syn: "Атмосфера, настрій", desc: "Емоційний фон, який створює людина, місце або подія." },
            { word: "Скіл", syn: "Навичка, вміння", desc: "Здатність добре виконувати певну дію." },
            { word: "Рофл", syn: "Жарт, регіт", desc: "Дуже смішний жарт; сміятися до сліз (від англ. ROFL)." },
            { word: "Токсик", syn: "Отруйна людина", desc: "Людина, яка псує настрій іншим, постійно критикує або маніпулює." },
            { word: "Булінг", syn: "Цькування", desc: "Агресивна поведінка, залякування когось." },
            { word: "Ізі", syn: "Легко, просто", desc: "Щось, що не потребує зусиль." },
            { word: "Вайті", syn: "Увійти в IT", desc: "Почати кар'єру в сфері інформаційних технологій." }
        ]
    },
    neologisms: {
        title: "Вправа 3 (на вибір). Укладіть словник-мінімум авторських неологізми з української поезії.",
        rules: "Словник має налічувати мінімум 20 індивідуально-авторських новотворів із зазначенням авторства.",
        headers: ["Неологізм", "Автор", "Пояснення / Значення"],
        words: [
            { word: "Яблуневоцвітно", syn: "Павло Тичина", desc: "Характеристика, що передає красу та свіжість яблуневого цвіту." },
            { word: "Сонцепоклонник", syn: "Михайло Коцюбинський", desc: "Той, хто поклоняється сонцю (стало візитівкою автора)." },
            { word: "Злотоцінно", syn: "Павло Тичина", desc: "Щось дуже цінне, золоте." },
            { word: "Веснонька-весна", syn: "Павло Тичина", desc: "Пестливе та поетичне звертання до весни." },
            { word: "Хмарочос", syn: "Михайль Семенко", desc: "Слово, яке увійшло в ужиток, але спочатку активно вводилося футуристами." },
            { word: "Дніпростан", syn: "Микола Хвильовий", desc: "Поетична назва країни навколо Дніпра." },
            { word: "Сніжно-синій", syn: "Володимир Сосюра", desc: "Колірний епітет, що поєднує холод і глибину." },
            { word: "Зорехмарний", syn: "Василь Стус", desc: "Той, що поєднує в собі зорі та хмари." },
            { word: "Сонцебризний", syn: "Іван Драч", desc: "Той, що розбризкує сонце, світло." },
            { word: "Небозвід", syn: "Ліна Костенко", desc: "Поетичний синонім до слова небосхил." }
        ]
    }
};

function changeTab(tabName, buttonElement) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (buttonElement) {
        buttonElement.classList.add('active');
    }

    const data = dictionaryData[tabName];

    document.getElementById('task-desc').innerHTML = `
        <strong>${data.title}</strong>
        ${data.rules}
    `;

    const headerRow = document.getElementById('table-header');
    headerRow.innerHTML = '';
    data.headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    data.words.forEach(item => {
        const tr = document.createElement('tr');
        
        const tdWord = document.createElement('td');
        tdWord.className = 'word-cell';
        tdWord.textContent = item.word;
        
        const tdSyn = document.createElement('td');
        tdSyn.textContent = item.syn;
        
        const tdDesc = document.createElement('td');
        tdDesc.textContent = item.desc;

        tr.appendChild(tdWord);
        tr.appendChild(tdSyn);
        tr.appendChild(tdDesc);
        tableBody.appendChild(tr);
    });
}

window.onload = () => {
    const firstButton = document.querySelector('.tab-btn');
    changeTab('dialects', firstButton);
};