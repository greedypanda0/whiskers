import { NextResponse } from "next/server";

function json(data = {}, isSuccess) {
  return NextResponse.json({
    ...data,
    timestamp: Date.now(),
    success: isSuccess,
  });
}

function getRandomId(length = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export { json, getRandomId };
