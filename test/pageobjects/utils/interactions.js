const timeOutValue = 30000;

class Interactions {

    eb_Click(element) {
        element.waitForClickable({ timeout: timeOutValue });
        element.click();
    }

    eb_TypeValue(element, textToEnter) {
        element.waitForDisplayed({ timeout: timeOutValue });
        element.clearValue();
        element.setValue(textToEnter);
    }

    eb_GetText(element) {
        element.waitForExist({ timeout: timeOutValue });
        element.waitForDisplayed({ timeout: timeOutValue });
        return element.getText();
    }

    eb_Click_ExistElement(element) {
        element.waitForExist({ timeout: timeOutValue });
        element.click();
    }
}

module.exports = new Interactions();