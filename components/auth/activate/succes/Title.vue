<template>
    <div class="auth_register_succes_wrapper">
        <div class="auth_register_succes">
            <div class="auth_register_succes_text">
                <div class="auth_register_succes_text_title_wrapper">
                    <img src="/icons/check.png" alt="" class="auth_register_succes_text_title_icon">
                    <span class="auth_register_succes_text_title">
                        Регистрация прошла успешно!
                    </span>
                </div>
                <span class="auth_register_succes_text_desc">
                    Чтобы войти в аккаунт, перейдите по ссылке из письма, которое мы отправили вам на электронный адрес:
                </span>
                <span class="auth_register_succes_text_email">«{{ userData.email }}»</span>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState("login", ["userData"])
    }
}
</script>

<style lang="scss">
</style>