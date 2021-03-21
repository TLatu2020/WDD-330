const links = [{
        label: "Week1 notes",
        url: "week1"
    },
    {
        label: "Week2 notes",
        url: "week2"
    },
    {
        label: "Week3 notes",
        url: "week3"
    },
    {
        label: "Week4 notes",
        url: "week4"
    }, {
        label: "Week5 notes",
        url: "week5"
    },
    {
        label: "Week6 notes",
        url: "week6"
    },
    {
        label: "Week7 notes",
        url: "week7"
    },
    {
        label: "Week8 notes",
        url: "week8"
    },
    {
        label: "Week9 notes",
        url: "week9"
    },
    {
        label: "Week10 notes",
        url: "week10"
    },
    {
        label: "Week11 notes",
        url: "week11"
    }
]

links.forEach(link => {
    let list = document.createElement("li");
    let week = document.createElement("a");

    week.textContent = link.label;
    week.setAttribute("href", link.url);

    list.append(week);

    document.querySelector('ol').appendChild(list);

})

WebFont.load({
    google: {
        families: [
            'Roboto Slab', 'Montserrat'
        ]
    }
});