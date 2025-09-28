function Notification({ messageCount }) {
  return (
    <div>
      <h2>Notificaciones</h2>

      {/* Solo se muestra si hay mensajes */}
      {messageCount > 0 && (
        <p>¡Tienes {messageCount} mensajes sin leer!</p>
      )}
    </div>
  );
}

export default Notification;
