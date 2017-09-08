Common/Heading
==============
A header element which can be displayed with an icon and count number.

![Heading example](../../assets/images/heading-1.png)

```jsx
<div>
    <Heading size={1} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
    <Heading size={2} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
    <Heading size={3} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
    <Heading size={4} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
    <Heading size={5} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
    <Heading size={6} icon="bug" controls={[<Icon name="gear" />, <Icon name="refresh" />]}>
        Heading
    </Heading>
</div>
```

### Props

**size={number}**  
A value from 1 to 6 indicating the type of header to use, e.g. h1, h2, h3, etc.

**icon={string|element}**  
Icon to display to the left of the text. Either the name of an icon, or an `Icon` component.

**controls={array}**  
Elements added to the right of the text.

**count={number}**  
Number value to display to the right of the text.

### CSS
Adds the `dp-heading` class to the created element.

Wraps the controls in the `dp-heading__controls` class.

Wraps the count value in the `dp-heading__count` class.
