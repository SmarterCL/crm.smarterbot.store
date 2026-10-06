import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage, List, Mail, Section } from "@/components/legal/legal-page";
import { BRAND } from "@/config/brand";
import { LEGAL } from "@/config/legal";

export const metadata: Metadata = {
  title: { absolute: `Solicitudes de autoridades · ${BRAND.name}` },
  description: `Protocolo de ${LEGAL.companyName} para responder solicitudes de datos de autoridades públicas.`,
  robots: { index: true, follow: true },
};

export default function AuthorityRequestsPage() {
  return (
    <LegalPage
      title="Protocolo de solicitudes de autoridades"
      intro={
        <p>
          Este protocolo describe cómo {LEGAL.companyName} responde cuando una autoridad pública
          solicita datos personales tratados en {BRAND.name}. Aplica a los datos de usuarios del
          CRM y a los datos de los contactos de nuestros clientes, incluidos los recibidos a través
          de la plataforma de WhatsApp Business de Meta.
        </p>
      }
    >
      <Section title="1. Principios">
        <List
          items={[
            <>
              <strong>Legalidad:</strong> solo entregamos datos cuando existe una obligación legal
              válida y la solicitud proviene de una autoridad competente.
            </>,
            <>
              <strong>Minimización:</strong> entregamos únicamente los datos estrictamente
              necesarios para cumplir la solicitud.
            </>,
            <>
              <strong>Registro:</strong> documentamos cada solicitud y nuestra respuesta.
            </>,
          ]}
        />
      </Section>

      <Section title="2. Recepción">
        <p>
          Las solicitudes deben dirigirse por escrito a {LEGAL.companyName}, {LEGAL.address}, o al
          correo <Mail />. No respondemos solicitudes recibidas por canales informales, como
          llamadas o mensajes de WhatsApp, sin una solicitud escrita que las respalde.
        </p>
        <p>
          El representante legal de {LEGAL.companyName} es el responsable de gestionar cada
          solicitud.
        </p>
      </Section>

      <Section title="3. Revisión de legalidad">
        <p>Antes de responder, revisamos con asesoría legal:</p>
        <List
          items={[
            "La identidad de quien solicita y que la autoridad sea competente para pedir esos datos.",
            "El fundamento legal invocado: ley aplicable, resolución u orden judicial.",
            "Que la solicitud sea específica: personas, cuentas, periodo y tipo de datos.",
            "Si la solicitud corresponde a datos de un cliente que actúa como responsable, caso en que evaluamos remitirla a ese cliente.",
          ]}
        />
        <p>
          Si la solicitud no cumple estos requisitos, pedimos que se complete o aclare antes de
          entregar cualquier dato.
        </p>
      </Section>

      <Section title="4. Minimización">
        <p>
          Cuando corresponde entregar datos, revisamos qué información responde exactamente a lo
          solicitado y excluimos todo lo demás. No entregamos accesos directos a nuestros sistemas
          ni copias completas de bases de datos.
        </p>
      </Section>

      <Section title="5. Aviso al cliente">
        <p>
          Salvo que la ley o la autoridad lo prohíban, informamos al cliente afectado sobre la
          solicitud antes de entregar sus datos o, si no es posible, tan pronto como esté
          permitido.
        </p>
      </Section>

      <Section title="6. Registro">
        <p>Por cada solicitud dejamos constancia de:</p>
        <List
          items={[
            "Fecha de recepción y autoridad solicitante.",
            "Contenido de la solicitud y fundamento legal invocado.",
            "Resultado de la revisión de legalidad y asesoría consultada.",
            "Datos entregados, o motivo por el cual no se entregaron, y fecha de respuesta.",
          ]}
        />
        <p>Conservamos este registro por al menos 5 años.</p>
      </Section>

      <Section title="7. Contacto">
        <p>
          Para consultas sobre este protocolo escribe a <Mail />. Más información sobre el
          tratamiento de datos en nuestra{" "}
          <Link href="/privacidad" className="underline underline-offset-2">
            política de privacidad
          </Link>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
