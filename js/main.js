const links = [{
    label: "Week1 notes",
    url: "week1/index.html"
}]

links.forEach(link => {
    let list = document.createElement("li");
    let week = document.createElement("a");

    week.textContent = link.label;
    week.setAttribute("href", link.url);

    list.append(week);

    document.querySelector('ol').appendChild(list);

})