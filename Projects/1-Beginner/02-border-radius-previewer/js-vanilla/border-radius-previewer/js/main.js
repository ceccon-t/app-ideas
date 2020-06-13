function hello () {
    alert("I was clicked!");
}

function updatePreview() {
    /*
    let topLeft = document.getElementById("input_top-left").value;
    let topRight = document.getElementById("input_top-right").value;
    let bottomRight = document.getElementById("input_bottom-right").value;
    let bottomLeft = document.getElementById("input_bottom-left").value;
    let newValue = generateBorderRadiusCss(topLeft, topRight, bottomRight, bottomLeft);
    let a = getValueForSelect(document.getElementById("input_top-left-unit"));
    alert("Is " + a);
    alert("Updating to: " + newValue);
    */
    let topLeftElement = document.getElementById("input_top-left");
    let topLeftUnitElement = document.getElementById("input_top-left-unit");
    let topRightElement = document.getElementById("input_top-right");
    let topRightUnitElement = document.getElementById("input_top-right-unit");
    let bottomRightElement = document.getElementById("input_bottom-right");
    let bottomRightUnitElement = document.getElementById("input_bottom-right-unit");
    let bottomLeftElement = document.getElementById("input_bottom-left");
    let bottomLeftUnitElement = document.getElementById("input_bottom-left-unit");

    let borderRadiusObject = buildBorderRadiusObjectFromElements(topLeftElement, topLeftUnitElement,
                                                                topRightElement, topRightUnitElement,
                                                                bottomRightElement, bottomRightUnitElement,
                                                                bottomLeftElement, bottomLeftUnitElement);

    let newValue = generateBorderRadiusCss(borderRadiusObject.topLeft, borderRadiusObject.topLeftUnit,
                                            borderRadiusObject.topRight, borderRadiusObject.topRightUnit,
                                            borderRadiusObject.bottomRight, borderRadiusObject.bottomRightUnit,
                                            borderRadiusObject.bottomLeft, borderRadiusObject.bottomLeftUnit);

    alert("Updating to: " + newValue);
    document.getElementById("preview").style.borderRadius = newValue;
    alert("Updated!");
}

function buildBorderRadiusObjectFromElements(topLeftInput, topLeftUnitSelect,
                                             topRightInput, topRightUnitSelect,
                                             bottomRightInput, bottomRightUnitSelect,
                                             bottomLeftInput, bottomLeftUnitSelect) {
    let borderRadiusObject = {};

    borderRadiusObject.topLeft = topLeftInput.value;
    borderRadiusObject.topLeftUnit = getValueForSelect(topLeftUnitSelect);

    borderRadiusObject.topRight = topRightInput.value;
    borderRadiusObject.topRightUnit = getValueForSelect(topRightUnitSelect);

    borderRadiusObject.bottomLeft = bottomLeftInput.value;
    borderRadiusObject.bottomLeftUnit = getValueForSelect(bottomLeftUnitSelect);

    borderRadiusObject.bottomRight = bottomRightInput.value;
    borderRadiusObject.bottomRightUnit = getValueForSelect(bottomRightUnitSelect);

    return borderRadiusObject;
}

function generateBorderRadiusCss(topLeft, topLeftUnit, topRight, topRightUnit, 
                                bottomRight, bottomRightUnit, bottomLeft, bottomLeftUnit) {
    return topLeft + topLeftUnit + " " + topRight + topRightUnit + " "
             + bottomRight + bottomRightUnit + " " + bottomLeft + bottomLeftUnit;
}

function getValueForSelect(element) {
    return element.options[element.selectedIndex].value;
}