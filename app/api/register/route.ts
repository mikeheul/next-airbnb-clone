import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import toast from 'react-hot-toast';

import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request, 
) {
  const body = await request.json();
  const { 
    email,
    name,
    password,
    repeatPassword
  } = body;

  if(password !== repeatPassword) { // Checking if password and repeated password match
    toast.error('Passwords have to match!')
    return NextResponse.error();
  }

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

  // Check if password meets the requirements
  if (!passwordPattern.test(password)) {
    toast.error('Password have to meet requirements!')
    return NextResponse.error();
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  return NextResponse.json(user);
}