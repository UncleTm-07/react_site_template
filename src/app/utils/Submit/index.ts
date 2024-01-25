import {confirmAlert} from "react-confirm-alert";


export const submit = (message: string, handelYes: () => void, handleNo: () => void = () => {}) => {
    confirmAlert({
        title: 'Підтвердження',
        message: `Ви впевнені що хочете ${message}`,
        buttons: [
            {
                label: 'Так',
                onClick: handelYes
            },
            {
                label: 'Ні',
                onClick: handleNo
            }
        ]
    });
};
