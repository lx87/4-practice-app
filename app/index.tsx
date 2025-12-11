import { styles } from "@/static/stylesDark";
import React, { useRef, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Switch, Text, TextInput, View } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const commentRef = useRef<TextInput>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Имя не может быть пустым";
    else if (name.trim().length < 2) newErrors.name = "Имя должно быть минимум 2 символа";

    if (!email.trim()) newErrors.email = "Email не может быть пустым";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Введите корректный email";

    if (!password) newErrors.password = "Пароль не может быть пустым";
    else if (password.length < 6) newErrors.password = "Пароль должен быть минимум 6 символов";

    if (comment.length > 200) newErrors.comment = "Комментарий не может быть длиннее 200 символов";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (validate()) {
      Alert.alert("Регистрация успешна", `Имя: ${name}\nEmail: ${email}\nПароль: ${password}\nПодписка: ${subscribe ? "Да" : "Нет"}\nКомментарий: ${comment}`);

      setName("");
      setEmail("");
      setPassword("");
      setSubscribe(false);
      setComment("");
      setErrors({});
    } else {
      Alert.alert("Ошибка", "Проверьте правильность заполнения полей");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Форма регистрации</Text>

        <Text style={styles.text}>Имя</Text>
        <TextInput style={styles.input} placeholder="Имя" value={name} onChangeText={setName} returnKeyType="next" onSubmitEditing={() => emailRef.current?.focus()} />
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}

        <Text style={styles.text}>Email</Text>
        <TextInput ref={emailRef} style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" returnKeyType="next" onSubmitEditing={() => passwordRef.current?.focus()} />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <Text style={styles.text}>Пароль</Text>
        <TextInput ref={passwordRef} style={styles.input} placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry returnKeyType="next" onSubmitEditing={() => commentRef.current?.focus()} />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={styles.switchContainer}>
          <Text style={styles.text}>Подписка на новости:</Text>
          <Switch value={subscribe} onValueChange={setSubscribe} />
        </View>

        <Text style={styles.text}>Комментарий</Text>
        <TextInput ref={commentRef} style={[styles.input, { height: 100 }]} placeholder="Комментарий" value={comment} onChangeText={setComment} multiline numberOfLines={4} maxLength={200} />
        <Text style={styles.charCount}>{comment.length}/200</Text>
        {errors.comment && <Text style={styles.error}>{errors.comment}</Text>}

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={handleRegister}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default App;
