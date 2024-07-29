"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failded to fetch meal data. Please tye again later</p>
    </main>
  );
}
