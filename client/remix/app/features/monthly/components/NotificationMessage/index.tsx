import { Notification, Placeholder, Uploader } from "rsuite";

export const NotificationMessage = () => {
  const type = "success";
  return (
    <Notification type={type} header={type} closable>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
  );
};
