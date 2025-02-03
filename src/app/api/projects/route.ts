import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Project from '../models/Project';

export async function GET() {
  await connectDB();
  try {
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  await connectDB();
  try {
    const body = await request.json();
    const { name, description, image, link } = body;

    // Optional: Validate your input here

    const project = new Project({ name, description, image, link });
    await project.save();

    return NextResponse.json(
      { success: true, data: project },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create project.' },
      { status: 500 }
    );
  }
}
