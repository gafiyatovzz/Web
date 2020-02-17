class UserInfo {
    constructor(item) {
        this.form = item.querySelector('.popup__form');
        this.button = item.querySelector('.btn-edit');
        this.userName = document.querySelector('.user-info__name');
        this.userJob = document.querySelector('.user-info__job');
        this.inputName = document.querySelector('.popup__input_name');
        this.inputJob = document.querySelector('.popup__input_job');

        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.updateUserInfo();
            item.classList.remove('popup_is-opened');
            this.form.reset();
        });
    }

    setUserInfo() {
        this.inputName.value = this.userName.textContent;
        this.inputJob.value = this.userJob.textContent;
    }

    updateUserInfo() { //добавление изменений через форму
        this.userName.textContent = this.inputName.value;
        this.userJob.textContent = this.inputJob.value;
    }

}