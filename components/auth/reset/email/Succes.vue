<template>
    <div class="auth_register_succes_wrapper">
        <div class="auth_register_succes">
            <div class="auth_register_succes_text">
                <div class="auth_register_succes_text_title_wrapper">
                    <img src="/icons/check.png" alt="" class="auth_register_succes_text_title_icon">
                    <span class="auth_register_succes_text_title">
                        Ссылка на сброс пароля отправлена!
                    </span>
                </div>
                <span class="auth_register_succes_text_desc">
                    Чтобы сбросить пароль, перейдите по ссылке из письма, которое мы отправили вам на электронный адрес:
                </span>
                <span class="auth_register_succes_text_email">«{{ resetData.email }}»</span>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState("login", ["resetData"])
    }
}
</script>

<style lang="scss">
</style>