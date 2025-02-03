import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Project from '../../models/Project';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const Newproject = await Project.findById(params.id);
    if (!Newproject) {
      return NextResponse.json(
        { success: false, error: 'Project not found.' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: Newproject });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch project.' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const body = await request.json();
    const updatedProject = await Project.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!updatedProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found.' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: updatedProject });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update project.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const deletedProject = await Project.findByIdAndDelete(params.id);
    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: 'Project not found.' },
        { status: 404 }
      );
    }
    return NextResponse.json({
      success: true,
      message: 'Project deleted successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete project.' },
      { status: 500 }
    );
  }
}
