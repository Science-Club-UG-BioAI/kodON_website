import React from "react";

type Founder = {
  name: string;
  role?: string;
  email: string;
};

type Props = {
  discordInviteUrl: string;
  clubEmail: string;
  founders: [Founder, Founder];
  clubName?: string;
};

function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="underline underline-offset-4 hover:no-underline"
    >
      {email}
    </a>
  );
}

export default function Contact({
  discordInviteUrl,
  clubEmail,
  founders,
  clubName = "Koło Naukowe KODO",
}: Props) {
  const [f1, f2] = founders;

  return (
    <section
      id="Kontakt"
      className="relative w-full bg-lazuli-400 overflow-hidden"
      aria-label={`Kontakt - ${clubName}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="">
          <div className="flex flex-col gap-2 ">
            <h2 className="font-bold text-4xl px-4 bg-gradient-to-r from-lazuli-900 to-lazuli-10 text-transparent bg-clip-text inline-block">
              Kontakt
            </h2>
          </div>
        <div className="mt-10 px-4 grid gap-6 md:grid-cols-3">

            <div className="group rounded-2xl  bg-lazuli-900/10 transition p-6 shadow-sm hover:shadow-md">
              <div className="text-sm font-semibold text-slate-800">Discord</div>
              <p className="mt-2 text-slate-600 text-sm">
                Dołącz do grupy i napisz na kanale kontaktowym.
              </p>
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium hover:bg-slate-800"
              >
                Dołącz na Discorda
              </a>
              <div className="mt-3 text-xs text-slate-500 break-all">
                {discordInviteUrl}
              </div>
            </div>

            <div className="group rounded-2xl  bg-lazuli-900/10 transition p-6 shadow-sm hover:shadow-md">
              <div className="text-sm font-semibold text-slate-800">Email koła</div>
              <p className="mt-2 text-slate-600 text-sm">
                Sprawy formalne, współprace, patronaty itp.
              </p>
              <div className="mt-4 text-sm">
                <MailLink email={clubEmail} />
              </div>
            </div>

            <div className="group rounded-2xl  bg-lazuli-900/10 transition p-6 shadow-sm hover:shadow-md">
              <div className="text-sm font-semibold text-slate-800">
                Założyciele
              </div>

              <div className="mt-3 space-y-3">
                <div className="rounded-lg bg-lazuli-200/30 text-lazuli-900 p-3">
                  <div className="text-sm font-medium text-slate-900">
                    {f1.name}
                    {f1.role ? (
                      <span className="text-slate-500 font-normal"> · {f1.role}</span>
                    ) : null}
                  </div>
                  <div className="text-sm text-slate-700 mt-1">
                    <MailLink email={f1.email} />
                  </div>
                </div>

                <div className="rounded-lg bg-lazuli-200/30 text-lazuli-900 p-3">
                  <div className="text-sm font-medium text-slate-900">
                    {f2.name}
                    {f2.role ? (
                      <span className="text-slate-500 font-normal"> · {f2.role}</span>
                    ) : null}
                  </div>
                  <div className="text-sm text-slate-700 mt-1">
                    <MailLink email={f2.email} />
                  </div>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Jeśli nie wiesz do kogo pisać, pisz śmiało na mail koła.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
