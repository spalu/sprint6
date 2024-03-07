import { data } from "./data.js";

const container = document.getElementById('container');
const buttons = document.getElementById("buttons");
const content = document.getElementById("content");
const table = document.createElement('table');
const allElementsWindow = document.createElement('div');




const keys = Object.keys(data);


keys.forEach((key) => {
    const button = document.createElement('button');
    button.innerHTML = key;
    buttons.appendChild(button);
    button.addEventListener('click', handleButtonClick)
});

function handleButtonClick(event) {
    const tr = document.createElement('tr');
    content.innerHTML = "";
    table.innerHTML = "";
    let nameButton = event.target.innerHTML;
    let dataObject = data[nameButton];
    let titleHeader = Object.keys(dataObject[0]);
    content.appendChild(table);
    table.appendChild(tr);
    
    let titleRow = ["ID", titleHeader[0], titleHeader[1], titleHeader[2], "CREATED AT", "ACTIONS"];

    for(let title of titleRow){
        const th = document.createElement('th');
        th.innerHTML = title;
        tr.appendChild(th);
    };

    let keysNameButton = Object.keys(data[nameButton]);

    let dataRows = Object.values(data[nameButton]);

    for(let i = 0; i < keysNameButton.length; i++) {
        let dataRow = Object.values(dataRows[i]);
        
        const tr = document.createElement('tr');
        const firstRow = document.createElement('td');
        const secondRow = document.createElement('td');
        const thirdRow = document.createElement('td');
        const fourthRow = document.createElement('td');
        const fifthRow = document.createElement('td');
        const sixthRow = document.createElement('td');
        const buttonPlus = document.createElement('button');
        const buttonBin = document.createElement('button');
        const checkboxDelete = document.createElement('input');
        const deleteBox = document.createElement('div');
        
        
        table.appendChild(tr);

        firstRow.innerHTML = i+1;
        firstRow.id = "firstRow";
        tr.appendChild(firstRow);

        secondRow.innerHTML = dataRow[0];
        secondRow.id = "secondRow";
        tr.appendChild(secondRow);

        thirdRow.innerHTML = dataRow[1];
        thirdRow.id = "thirdRow";
        tr.appendChild(thirdRow);

        fourthRow.innerHTML = dataRow[2];
        fourthRow.id = "fourthRow";
        tr.appendChild(fourthRow);

        let date = new Date(dataRow[dataRow.length - 3]);
        fifthRow.innerHTML = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear();
        fifthRow.id = "fifthRow";
        tr.appendChild(fifthRow);

        buttonPlus.addEventListener("click", () => {

            allElementsWindow.innerHTML = "";
            allElementsWindow.id = "allElementsWindow";

            const tableButtonPlus = document.createElement('table');
            const buttonClose = document.createElement('button');
            buttonClose.innerHTML = "X";
            buttonClose.id = "buttonClose";

            container.appendChild(allElementsWindow);
            allElementsWindow.appendChild(tableButtonPlus);
            allElementsWindow.appendChild(buttonClose);

            for(let j = 0; j < Object.keys(dataRows[i]).length; j++) {

                const tr = document.createElement('tr');
                const firstCell = document.createElement('td');
                const secondCell = document.createElement('td');

                let oneObject = Object.entries(dataRows[i]);
                let objectData = oneObject[j];
                let value = objectData[1];
                let key = objectData[0];

                tableButtonPlus.appendChild(tr);
                firstCell.innerHTML = key;
                tr.appendChild(firstCell);
                secondCell.innerHTML = value;
                tr.appendChild(secondCell);

                buttonClose.addEventListener("click", () => {
                container.removeChild(allElementsWindow);
                })
            }
        });

        buttonBin.addEventListener("click", () => {
            table.removeChild(tr);
        });
            buttonPlus.innerHTML = "+";
            buttonPlus.id = "buttonPlus";
            buttonBin.innerHTML = "Delete";
            buttonBin.id = "buttonBin";
            checkboxDelete.type = "checkbox";
            checkboxDelete.id = "delete";
            deleteBox.id = "deleteBox";
            
            sixthRow.appendChild(checkboxDelete);
            sixthRow.appendChild(buttonPlus);
            sixthRow.appendChild(buttonBin);
            sixthRow.id = "sixthRow";
            tr.appendChild(sixthRow);
            

            checkboxDelete.addEventListener("change", () => {
                const allCheckbox = document.querySelectorAll('input[type = "checkbox"]');
                const convertedAllCheckbox = Array.from(allCheckbox);
                const isChecked = convertedAllCheckbox.some((element) => element.checked);
                if(isChecked && !document.getElementById("deleteButton")) {
                    const deleteButton = document.createElement('button');
                    deleteButton.innerHTML = "delete selected lines";
                    deleteButton.id = "deleteButton";
                    container.appendChild(deleteButton);
                } else if (!isChecked && document.getElementById("deleteButton")) {
                    container.removeChild(deleteButton);
                }
                deleteButton.addEventListener('click', () => {
                    table.removeChild(tr);
                    container.removeChild(deleteButton);
                })
            })

            
        
    }

    const pageLeft = document.createElement('button');
    pageLeft.id = "pageLeft";
    const pageRight = document.createElement('button');
    pageRight.id = "pageRight";
    const pageNumber = document.createElement('input');
    pageNumber.id = "pageNumber";
    const amountElements = document.createElement('select');
    amountElements.id = "amountElements";
    const optionAmountElementsFirst = document.createElement('option');
    const optionAmountElementsSecond = document.createElement('option');
    const pages = document.createElement('div');
    pages.id = "pages";

    pageLeft.innerHTML = "<";
    pageRight.innerHTML = ">";
    pageNumber.placeholder = "1";
    optionAmountElementsFirst.value = "10";
    optionAmountElementsFirst.innerHTML = "10";
    optionAmountElementsSecond.value = "20";
    optionAmountElementsSecond.innerHTML = "20";

    content.appendChild(pages);
    pages.appendChild(pageLeft);
    pages.appendChild(pageNumber);
    pages.appendChild(pageRight);
    amountElements.appendChild(optionAmountElementsFirst);
    amountElements.appendChild(optionAmountElementsSecond);
    pages.appendChild(amountElements);

     
}









