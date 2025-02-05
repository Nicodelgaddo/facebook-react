# Usa la imagen oficial de Node.js como base
FROM node:20

# Instala herramientas básicas
RUN apt-get update && apt-get install -y \
  less \
  man-db \
  sudo \
  && rm -rf /var/lib/apt/lists/*

# # Establece el directorio de trabajo
# WORKDIR /workspace

# # Copia los archivos de tu proyecto (asegúrate de usar `.dockerignore`)
# COPY . .

# # Instala las dependencias globales (si las necesitas)
# RUN npm install -g npm@latest

# # Configura el usuario del contenedor
# ARG USERNAME=node
# RUN echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
#     && chmod 0440 /etc/sudoers.d/$USERNAME

# # Expone el puerto para el servidor de desarrollo de Next.js
# EXPOSE 3000
