import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabase.from('_health_check').select('1').limit(1).maybeSingle()

    if (error && !error.message.includes('does not exist')) {
      return NextResponse.json({
        status: 'error',
        error: error.message,
        code: error.code
      }, { status: 500 })
    }

    return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
  } catch (err: unknown) {
    return NextResponse.json({
      status: 'error',
      error: err instanceof Error ? err.message : String(err)
    }, { status: 500 })
  }
}
