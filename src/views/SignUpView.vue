<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Form, Field, ErrorMessage, configure, defineRule } from "vee-validate";
import { required, email as emailValidation, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import LogoIcon from "@/assets/img/LogoIcon.vue";

defineRule("required", required);
defineRule("email", emailValidation);
defineRule("min", min);


defineRule(
  "number",
  (value) => /[0-9]/.test(value) || "Password must contain at least one number."
);

configure({
  validateOnInput: true,
  generateMessage: localize("en", {
    messages: {
      required: "This field is required",
      email: "Please enter a valid email address.",
      min: "Password must be at least 4 characters.",
    },
  }),
});

const email = ref("");
const password = ref("");
const emailRules = "required|email";
const passwordRules = "required|min:4|number";

// Используем useRouter для навигации
const router = useRouter();

// Обработчик отправки формы
const handleSubmit = (values) => {
  if (values.email && values.password) {
    // Если форма прошла валидацию, перенаправляем на другую страницу
    router.push("/home"); // Например, перенаправление на главную страницу
  }
};
</script>

<template>
  <div class="register-page">
    <LogoIcon />
    <div class="container">
      <h2 class="title">Sign up</h2>
      <Form @submit="handleSubmit">
        <div class="input-container">
          <label for="email" class="input-label">Email address</label>

          <Field
            type="email"
            name="email"
            v-model="email"
            class="input"
            :rules="emailRules"
            placeholder="youremail@domain.com"
            autocomplete="email"
            list="email-suggestions"
          />
          <ErrorMessage as="email" name="email" class="input-label-error" />
          <datalist id="email-suggestions">
            <option value="user@example.com"></option>
            <option value="admin@example.com"></option>
          </datalist>
        </div>
        <div class="input-container">
          <label for="password" class="input-label">Password</label>

          <Field
            type="password"
            name="password"
            v-model="password"
            class="input"
            :rules="passwordRules"
            placeholder="Password"
            autocomplete="password"
            autoc
          />
        </div>
        <ErrorMessage name="password" class="input-label-error" />
        <div class="input-container">
          <button type="submit" class="button">Continue</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  padding: 30px 0px;
}
.logo {
  display: flex;
  position: absolute;
  top: 20px;
  left: 20px;
}
.container {
  width: 40%;
  height: fit-content;
  margin: 0 auto;
}
.title {
  font-size: 1.7rem;
}
form {
  width: 100%;
  height: fit-content;
}
.input-container {
  margin-top: 30px;
}
.label-container {
  display: flex;
  justify-content: space-between;
}
.input-label {
  display: block;
}
.input-label-error {
  display: block;
  color: #d42e2e;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 10px;
}
.input {
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: var(--block-color);
  border: solid 2px var(--border-color);
  border-radius: 15px;
  outline: none;
}
</style>
