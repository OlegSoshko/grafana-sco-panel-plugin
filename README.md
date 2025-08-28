# Сборка плагина

1. поднять версию в package.json (автоматизировать)
2. выполнить `npm install`
3. подписать плагин `npx @grafana/sign-plugin@latest`
4. переименовать dist `mv dist/ sco-panel`
5. упаковываем `zip myorg-simple-panel-1.0.0.zip myorg-simple-panel -r`
6. удаляем sco-panel `rm -fr sco-panel

# Установка плагина

Скачайте архив с ресурсами плагина и установите его, распаковав в каталог плагина. Например:

```bash
unzip my-plugin-0.2.0.zip -d YOUR_PLUGIN_DIR/my-plugin
```

# Полезные ссылки

- упаковка плагина: https://grafana.com/developers/plugin-tools/publish-a-plugin/package-a-plugin
- подпись плагина: https://grafana.com/developers/plugin-tools/publish-a-plugin/sign-a-plugin
- grafana ui kit: https://developers.grafana.com/ui/latest/index.html?path=/
- установка плагина: https://grafana.com/docs/grafana/latest/administration/plugin-management/plugin-install/
