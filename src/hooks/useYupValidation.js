export const useYupValidation = () => {
    return {
        validateForm,
        validateInputField,
    };
};

const validateForm = async (validationSchema, inputValues) => {
    const validationResult = await validationSchema
        .validate(inputValues, { abortEarly: false })
        .then((result) => result)
        .catch((err) => err);

    if(validationResult.errors) {
        const errorsObject = validationResult.inner;
        const fieldMessageArray = errorsObject.map((err) => [
            err.path,
            err.message,
        ]); //['fullName','fullName is a required field' ]

        const messagesGroupedByField = fieldMessageArray.reduce(function (
            acc,
            errPair
        ) {
            let key = errPair[0];
            if(!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(errPair[1]);
            return acc;
        },
            {});

        throw messagesGroupedByField;
    }

    return validationResult;
};

const validateInputField = async (validationSchema, inputValue, inputName) => {
    const validationResult = await validationSchema
        .validate(inputValue, { abortEarly: false })
        .then((result) => result)
        .catch((err) => err);

    if(validationResult.errors) {
        const errorsObject = validationResult.inner;
        const fieldMessageArray = errorsObject.map((err) => [
            err.path,
            err.message,
        ]); //['fullName','fullName is a required field' ]

        const messagesGroupedByField = fieldMessageArray.reduce(function (
            acc,
            errPair
        ) {
            let key = errPair[0];

            if(key !== inputName) {
                return acc;
            }

            if(!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(errPair[1]);
            return acc;
        },
            {});

        if(!messagesGroupedByField[inputName]) {
            return;
        }

        throw messagesGroupedByField;
    }

    return validationResult;
};
