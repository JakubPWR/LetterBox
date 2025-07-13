import {
  ServerRoute,
  RenderMode,
  ServerRoutePrerenderWithParams
} from '@angular/ssr';

// ✅ Async version to match type
export async function getPrerenderParams(): Promise<Record<string, string>[]> {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

const prerenderRoute: ServerRoutePrerenderWithParams = {
  path: 'details/:id',
  renderMode: RenderMode.Prerender,
  getPrerenderParams
};

export const serverRoutes: ServerRoute[] = [
  prerenderRoute,
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
