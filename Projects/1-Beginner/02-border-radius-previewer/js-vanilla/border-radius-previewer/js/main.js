function updatePreview() {
    newValue = generateBorderRadiusCss();

    document.getElementById("preview").style.borderRadius = newValue;
    document.getElementById("css_value").value = "border-radius: " + newValue + ";";
}

function copyToClipboard() {
    let cssValueDisplay = document.getElementById("css_value");

    cssValueDisplay.disabled = false;
    cssValueDisplay.select();
    cssValueDisplay.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand("copy");
    cssValueDisplay.disabled = true;

    alert("Copied '" + cssValueDisplay.value + "' to clipboard");
}

function generateBorderRadiusCss() {
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

    let newValue = generateBorderRadiusCssString(borderRadiusObject.topLeft, borderRadiusObject.topLeftUnit,
                                            borderRadiusObject.topRight, borderRadiusObject.topRightUnit,
                                            borderRadiusObject.bottomRight, borderRadiusObject.bottomRightUnit,
                                            borderRadiusObject.bottomLeft, borderRadiusObject.bottomLeftUnit);

    return newValue;
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

function generateBorderRadiusCssString(topLeft, topLeftUnit, topRight, topRightUnit, 
                                bottomRight, bottomRightUnit, bottomLeft, bottomLeftUnit) {
    return topLeft + topLeftUnit + " " + topRight + topRightUnit + " "
             + bottomRight + bottomRightUnit + " " + bottomLeft + bottomLeftUnit;
}

function getValueForSelect(element) {
    return element.options[element.selectedIndex].value;
}