"use client";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    // redirect user to backend Google Auth route
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to E-CELL HIT</h1>
      <p className="mb-6">Sign in with Google to access the site</p>
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Continue with Google
      </button>
    </main>
  );
}
