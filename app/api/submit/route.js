import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const body = await request.json()
    const { answers } = body

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json(
        { error: 'Invalid payload — answers array required.' },
        { status: 400 }
      )
    }

    // Sanitise inputs
    const clean = answers.map((a) => ({
      question: String(a.question || '').slice(0, 500),
      answer: String(a.answer || '').slice(0, 2000),
    }))

    // Log to server (visible in Netlify function logs)
    console.log('[SECES] New analysis submission', {
      count: clean.length,
      timestamp: new Date().toISOString(),
    })

    // -------------------------------------------------------
    // TODO: plug in your data layer here, e.g.:
    //
    // — Save to Supabase:
    //   const { error } = await supabase.from('submissions').insert({ answers: clean })
    //
    // — Send email via Resend:
    //   await resend.emails.send({ from, to, subject, text: JSON.stringify(clean) })
    //
    // — Push to HubSpot / CRM webhook:
    //   await fetch(process.env.CRM_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(clean) })
    // -------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message: 'Analysis received. Results will be delivered shortly.',
        id: `seces_${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (err) {
    console.error('[SECES] Submission error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
