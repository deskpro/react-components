Badges/TextBadge
================
Renders any text as a badge.

![TextBadge example](../../assets/images/text-badge-1.png)

```jsx
<div>
    <TextBadge>Default</TextBadge>
    <TextBadge type="success">Success</TextBadge>
    <TextBadge type="info">Info</TextBadge>
    <TextBadge type="warning">Warning</TextBadge>
    <TextBadge type="danger">Danger</TextBadge>
</div>
```

### Props

**type={string}**  
The type of alert to display. One of "default", "success", "info", "warning", or "danger".

### CSS
Adds `dp-badge` to the root element.

Adds `dp-badge--${type}` to the root element, where `${type}` matches the `type` prop value.

Adds `dp-bg--${type}` to the root element, where `${type}` matches the `type` prop value.