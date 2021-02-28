const links = [{
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week4 notes",
        url: "week4/index.html"
    }, {
        label: "Week5 notes",
        url: "week5/index.html"
    },
    {
        label: "Week6 notes",
        url: "week6/index.html"
    },
    {
        label: "Week7 notes",
        url: "week7/index.html"
    },
    {
        label: "Week8 notes",
        url: "week8/index.html"
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