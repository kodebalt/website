export async function onRequestGet(context) {
  context.env.LOGGER.fetch(context.request);
  return context.env.ASSETS.fetch(context.request);
}
