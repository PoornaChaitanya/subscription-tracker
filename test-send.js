import { sendReminderEmail } from "./utils/send-email.js";

const run = async () => {
  try {
    const fakeSubscription = {
      user: { name: "Test User", email: "chaituchaicreations@gmail.com" },
      name: "Test Plan",
      renewalDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      currency: "USD",
      price: 9.99,
      frequency: "monthly",
      paymentMethod: "card ****1111",
    };

    await sendReminderEmail({
      to: fakeSubscription.user.email,
      type: "7 days before reminder",
      subscription: fakeSubscription,
    });

    console.log("sendReminderEmail completed");
  } catch (err) {
    console.error("send test failed:", err);
    process.exit(1);
  }
};

run();
