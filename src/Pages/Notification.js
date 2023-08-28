import React from "react";
import Logo from "../Components/Logo/Logo";

const Notification = () => {
  return (
    <div>
        <Logo/>
      <h2>Notification preference's</h2>
      <ul>
        <li>
          Reduced Notification Fatigue: By letting users choose the
          notifications they receive, platforms can help prevent overwhelming
          customers with excessive or irrelevant alerts.
        </li>

        <li>
          Enhanced Engagement: When users receive notifications that align with
          their interests, they are more likely to engage with the platform,
          leading to increased visits, interactions, and ultimately, purchases.
        </li>

        <li>
          Improved Customer Satisfaction: Personalized notifications demonstrate
          that the platform values the user's preferences and respects their
          communication choices, leading to higher customer satisfaction.
        </li>
      </ul>
    </div>
  );
};

export default Notification;
