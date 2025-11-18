    import { defineStore } from "pinia";

    export const useAuth = defineStore("auth", {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        async login(email, password) {
        if (!email.trim() || !password.trim()) {
            return alert("لطفا ایمیل و رمزعبور را وارد کنید");
        }
        const data = await $fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        this.user = data.user.username;
        this.isLoggedIn = true;
        },

        async logout() {
        const data = await $fetch("/api/auth/logout");
        this.user = null;
        this.isLoggedIn = false;
        },

        async loadUser() {
        try {
            const data = await $fetch("/api/auth/me");
            this.user = data.username;
            this.isLoggedIn = true;
        } catch {
            this.user = null;
            this.isLoggedIn = false;
        }
        },
    },
    });
