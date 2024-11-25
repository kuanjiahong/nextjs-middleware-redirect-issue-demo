export default function LoginPage() {
    return (
      <form action="/api/cookie" method="POST">
        <button type="submit">Set Session Cookie</button>
      </form>
    );
  }
  