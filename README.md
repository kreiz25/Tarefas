# Tarefas

Xestor persoal de tarefas, pensado para abrir, anotar e organizar o que tes pendente sen complicacións. A interface garda os datos no navegador deste dispositivo mediante IndexedDB; non precisa conta nin envía tarefas a ningún servidor.

## Funcións

- Inicio con tarefas atrasadas, de hoxe e dos próximos sete días.
- Creación rápida e edición directa do título, data, lista, prioridade, notas e subtarefas.
- Listas persoais, de traballo, da casa e outras listas propias.
- Busca, filtros, ordenación, calendario mensual e arquivo de tarefas completadas.
- Copia de seguridade e transferencia manual mediante JSON.
- PWA instalable e interface adaptada a móbil, tablet e escritorio.

## Transferir datos entre dispositivos

Abre **Configuración**, exporta a copia JSON, pásaa polo medio que prefiras (por exemplo, Arquivos, iCloud Drive ou AirDrop) e impórtaa no outro dispositivo. Se coinciden identificadores, os rexistros existentes actualízanse cos valores do ficheiro. As copias poden conter información persoal: gárdaas nun lugar privado.

Os datos non se sincronizan automaticamente. Borrar os datos do navegador, cambiar de navegador ou perder o dispositivo pode eliminar tarefas locais; conserva copias de seguridade.

## Desenvolvemento

Requírese Node.js 20.19+ ou 22.12+ e npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## GitHub Pages

O workflow de GitHub Actions compila e publica `dist/` en cada envío á rama `main`. Para activar a publicación, selecciona **Settings → Pages → GitHub Actions** no repositorio. GitHub Pages gratuíto require un repositorio público. Os datos da aplicación permanecen no dispositivo e nunca forman parte do repositorio.

## Esquema local

Dexie crea a base IndexedDB independente `tarefas-local`, versión 1, coas táboas `tasks` e `settings`. A versión seguinte debe incluír unha migración incremental, sen borrar os datos existentes.
