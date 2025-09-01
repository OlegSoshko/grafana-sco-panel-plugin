# Сборка плагина

1. поднять версию в package.json (автоматизировать)
2. выполнить `npm install`
3. выполнить `npm run build`
4. добавить токен, если его нет `export GRAFANA_ACCESS_POLICY_TOKEN=<YOUR_ACCESS_POLICY_TOKEN>`
   YOUR_ACCESS_POLICY_TOKEN - это ваш токен, создаётся в личном кабинете grafana claud, если ещё не был создан ранее. Подробнее читайте руководство по подписанию плагина.
5. подписать плагин `npx @grafana/sign-plugin@latest --rootUrls <URL's>`
   URL's - список адресов, через запятую, на которых планируется установить плагин (необходимо так как плагин подписывается как приватный).
6. переименовать dist `mv dist/ sco-panel`
7. упаковываем `zip sco-panel-<ВЕРСИЯ>.zip sco-panel -r`
   версию надо вписать, к примеру `zip sco-panel-1.0.1.zip sco-panel -r`
8. удаляем sco-panel `rm -fr sco-panel`

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
