// News feed list screen
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import ArticleCard from '../../components/Card';
import { articlesList } from '../../data/articles';
import { styles } from '../../styles/index.styles';

export default function NewsFeed() {
  const [articles, setArticles] = useState(articlesList);
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <ArticleCard article={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}