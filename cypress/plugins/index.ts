import { plugins } from "cypress-social-logins";

module.exports = (on) => {
  on("task", {
    GoogleSocialLogin: plugins.GoogleSocialLogin,
  });
};
