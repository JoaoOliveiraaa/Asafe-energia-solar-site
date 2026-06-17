"use client"

import Script from "next/script"

type ElfsightGoogleReviewsProps = {
  className?: string
}

export function ElfsightGoogleReviews({ className }: ElfsightGoogleReviewsProps) {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className={`elfsight-app-ebbe8e81-7bf6-4471-ab29-8df47cf82ec7${className ? ` ${className}` : ""}`}
        data-elfsight-app-lazy
      />
    </>
  )
}
